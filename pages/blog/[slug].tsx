import BlogLayout from 'layouts/blog';
import { getAllFiles, getFileBySlug, getSerializedMDXContent } from 'lib/mdx';
import { Post } from 'lib/interfaces';

interface Props {
  post: Post;
}

export default function PostPage({ post }: Props) {
  return <BlogLayout post={post}></BlogLayout>;
}

interface Params {
  params: {
    slug: string;
  };
}

export async function getStaticProps({ params }: Params) {
  const post = getFileBySlug('blog', params.slug, [
    'title',
    'datePublished',
    'slug',
    'author',
    'excerpt',
    'content',
    'ogImage',
    'coverImage'
  ]);

  const serializedContent = await getSerializedMDXContent(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content: serializedContent
      }
    }
  };
}

export async function getStaticPaths() {
  const posts = getAllFiles('blog', ['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug
        }
      };
    }),
    fallback: false
  };
}
