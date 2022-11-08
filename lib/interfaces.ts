import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface IAuthor {
  name: string;
  picture: string;
}

export interface IPost {
  slug: string;
  title: string;
  datePublished: string;
  coverImage: string;
  author: IAuthor;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  mdxSource: MDXRemoteSerializeResult;
  readingTime: string;
}
