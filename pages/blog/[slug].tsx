import BlogLayout from 'layouts/blog';

export default function PostPage({ post }: any) {
  return <BlogLayout post={post}></BlogLayout>;
}
