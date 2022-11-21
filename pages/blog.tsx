import { NextPage } from 'next';
import { getAllFiles } from 'lib/mdx';
import { Post } from 'lib/interfaces';

import Container from 'components/Container';
import Wrapper from 'components/Wrapper';
import BlogPost from 'components/BlogPost';

interface Props {
  allPosts: Post[];
}

const Blog: NextPage<Props> = ({ allPosts }) => {
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
        <div className="relative mt-12 md:mt-14 lg:mt-16 grid max-w-5xl mx-auto">
          <hr className="absolute left-0 top-[2%] w-0 h-[96%] border-l border-grey-100 dark:border-grey-900 hidden md:block " />
          {allPosts &&
            allPosts.map((post: Post) => (
              <BlogPost key={post.slug} post={post}></BlogPost>
            ))}
        </div>
      </div>
    </Container>
  );
};

export const getStaticProps = async () => {
  const allPosts = getAllFiles('blog', [
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

export default Blog;
