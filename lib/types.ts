export type Author = {
  name: string;
  picture: string;
};

export type PostType = {
  slug: string;
  title: string;
  datePublished: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
};
