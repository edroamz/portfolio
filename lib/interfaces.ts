import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface Author {
  name: string;
  picture: string;
}

export interface Post {
  slug: string;
  title: string;
  datePublished: string;
  lastEdited: string;
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
  category: string;
  content: MDXRemoteSerializeResult;
}

export interface Uses {
  title: string;
  description: string;
  content: MDXRemoteSerializeResult;
}
