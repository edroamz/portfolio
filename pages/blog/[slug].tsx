import type { NextPage } from 'next';

import { BlogLayout } from 'layouts/blog';

import { getAllFiles, getFileBySlug, getSerializedMDXContent } from 'lib/mdx';
import { IPost } from 'lib/interfaces';

type PostPageProps = {
  post: IPost;
};

const PostPage: NextPage<PostPageProps> = ({ post }) => {
  return <BlogLayout post={post}></BlogLayout>;
};

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getFileBySlug('blog', params.slug, [
    'title',
    'datePublished',
    'dateModified',
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

export default PostPage;
