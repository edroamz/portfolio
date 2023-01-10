import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface IAuthor {
  name: string;
  picture: string;
}

export interface IPost {
  slug: string;
  title: string;
  datePublished: string;
  dateModified: string;
  author: IAuthor;
  excerpt: string;
  coverImage: string;
  ogImage: {
    url: string;
  };
  content: MDXRemoteSerializeResult;
  readingTime: string;
}

export interface ISnippet {
  slug: string;
  title: string;
  description: string;
  category: string;
  content: MDXRemoteSerializeResult;
}

export interface IUses {
  title: string;
  description: string;
  content: MDXRemoteSerializeResult;
}
