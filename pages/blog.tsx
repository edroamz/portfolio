import { getAllPosts } from 'lib/mdx';

import Container from 'components/Container';
import BlogPost from 'components/BlogPost';

export default function Blog({ allPosts }: any) {
  return (
    <Container title="Blog – Eduardo Rodriguez">
      <div className="max-w-4xl mx-auto pt-12 md:pt-20 px-7">
        <h1>Blog</h1>
        <p className="text-lg">
          I’ve worked on tons of little projects over the years but these are
          the ones that I’m most proud of.
        </p>
      </div>
      <div className="w-full md:px-7 max-w-4xl mx-auto">
        <div className="relative mt-12 md:mt-14 lg:mt-16 grid gap-y-2 max-w-4xl mx-auto">
          <hr className="absolute left-0 top-[2%] w-0 h-[96%] border-l border-color-subtle hidden md:block " />
          {allPosts &&
            allPosts.map((post: any) => (
              <BlogPost key={post.slug} post={post}></BlogPost>
            ))}
        </div>
      </div>
    </Container>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'datePublished',
    'slug',
    'author',
    'coverImage',
    'excerpt'
  ]);

  return {
    props: { allPosts }
  };
};
