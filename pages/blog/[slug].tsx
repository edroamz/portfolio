import BlogLayout from 'layouts/blog';
import { getAllPosts, getPostBySlug, getMdxSource } from 'lib/mdx';
import { IPost } from 'lib/interfaces';

interface IProps {
  post: IPost;
}

export default function PostPage({ post }: IProps) {
  return <BlogLayout post={post}></BlogLayout>;
}

interface IParams {
  params: {
    slug: string;
  };
}

export async function getStaticProps({ params }: IParams) {
  const post = getPostBySlug(params.slug, [
    'title',
    'datePublished',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage'
  ]);

  const mdxSource = await getMdxSource(post.content || '');

  return {
    props: {
      post: {
        ...post,
        mdxSource
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
