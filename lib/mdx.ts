import { join } from 'path';
import fs from 'fs';
import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';

const postsDirectory = join(process.cwd(), '/data/blog');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const fileName = slug.replace(/\.mdx$/, '');
  const fullPath = join(postsDirectory, `${fileName}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data: frontMatter, content } = matter(fileContents);

  interface IItems {
    [key: string]: string;
  }

  const items: IItems = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = fileName;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (typeof frontMatter[field] !== 'undefined') {
      items[field] = frontMatter[field];
    }
  });
  items['readingTime'] = readingTime(content).text;
  return items;
}

export async function getMdxSource(markdownContent: string) {
  const mdxSource = await serialize(markdownContent, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['anchor']
            }
          }
        ]
      ],
      format: 'mdx'
    }
  });

  return mdxSource;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) =>
      post1.datePublished > post2.datePublished ? -1 : 1
    );
  return posts;
}
