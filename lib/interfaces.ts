import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface Author {
  name: string;
  picture: string;
}

export interface Post {
  slug: string;
  title: string;
  datePublished: string;
  author: Author;
  excerpt: string;
  coverImage: string;
  ogImage: {
    url: string;
  };
  content: MDXRemoteSerializeResult;
  readingTime: string;
}

export interface Snippet {
  slug: string;
  title: string;
  description: string;
  content: MDXRemoteSerializeResult;
}
