import BlogLayout from 'layouts/blog';
import { getAllPosts, getPostBySlug, markdownToHtml } from 'lib/mdx';
import { PostType } from 'lib/types';

type Props = {
  post: PostType;
};

export default function PostPage({ post }: Props) {
  return <BlogLayout post={post}></BlogLayout>;
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'datePublished',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage'
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

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
