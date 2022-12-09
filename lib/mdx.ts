import { join } from 'path';
import fs from 'fs';

import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';

type MDXType = 'blog' | 'snippets' | 'uses';

function getFilesDirectory(type: MDXType): string {
  if (type === 'uses') {
    return join(process.cwd(), '/content');
  }
  return join(process.cwd(), `/content/${type}`);
}

export function getFileSlugs(type: MDXType) {
  return fs.readdirSync(getFilesDirectory(type));
}

export function getFileBySlug(
  type: MDXType,
  slug: string,
  fields: string[] = []
) {
  const fileName = slug.replace(/\.mdx$/, '');
  const filesDirectory = getFilesDirectory(type);
  const fullPath = join(filesDirectory, `${fileName}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data: frontMatter } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};
  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = fileName;
    }
    if (field === 'content') {
      items[field] = fileContents;
    }

    if (typeof frontMatter[field] !== 'undefined') {
      items[field] = frontMatter[field];
    }
  });
  items['readingTime'] = readingTime(fileContents).text;

  return items;
}

export async function getSerializedMDXContent(
  content: string
): Promise<MDXRemoteSerializeResult> {
  const result = await serialize(content, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'wrap',
            properties: {
              className: ['permalink-to-header']
            }
          }
        ]
      ],
      format: 'mdx'
    }
  });

  return result;
}

export function getAllFiles(type: MDXType, fields: string[] = []) {
  const slugs = getFileSlugs(type);
  const files = slugs
    .map((slug) => getFileBySlug(type, slug, fields))
    // sort files by date in descending order
    .sort((post1, post2) =>
      post1.datePublished > post2.datePublished ? -1 : 1
    );
  return files;
}
