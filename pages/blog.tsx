import { getAllPosts } from 'lib/mdx';

import Container from 'components/Container';
import Wrapper from 'components/Wrapper';
import BlogPost from 'components/BlogPost';

export default function Blog({ allPosts }: any) {
  return (
    <Container
      title="Blog – Eduardo R. Ambriz"
      description="Thoughts on the software industry, programming, tech, and more."
    >
      <Wrapper className="pt-16 md:pt-20">
        <h1>Blog</h1>
        <p className="text-lg">
          I’ve worked on tons of little projects over the years but these are
          the ones that I’m most proud of.
        </p>
      </Wrapper>
      <div className="w-full md:px-7 max-w-5xl mx-auto pb-16 md:pb-20">
        <div className="relative mt-12 md:mt-14 lg:mt-16 grid gap-y-2 max-w-5xl mx-auto">
          <hr className="absolute left-0 top-[2%] w-0 h-[96%] border-l border-grey-100 dark:border-grey-900 hidden md:block " />
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
