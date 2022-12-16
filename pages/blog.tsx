import type { NextPage } from 'next';

import { Separator } from '@radix-ui/react-separator';
import Container from 'components/Container';
import Wrapper from 'components/Wrapper';
import BlogPost from 'components/BlogPost';

import { getAllFiles } from 'lib/mdx';
import { Post } from 'lib/interfaces';

type BlogProps = {
  allPosts: Post[];
};

const Blog: NextPage<BlogProps> = ({ allPosts }) => {
  return (
    <Container
      title="Blog – Eduardo R. Ambriz"
      description="Thoughts on the software industry, programming, tech, and more."
    >
      <Wrapper>
        <section>
          <h1>Blog</h1>
          <p className="text-lg mb-8 max-w-prose">
            I’ve worked on tons of little projects over the years but these are
            the ones that I’m most proud of.
          </p>

          <div className="relative grid gap-y-2">
            <Separator
              decorative
              orientation="vertical"
              className="absolute left-0 top-[2%] w-0 h-[96%] border-l border-grey-100 dark:border-grey-900 hidden md:block"
            />
            {allPosts &&
              allPosts.map((post: Post) => (
                <BlogPost key={post.slug} post={post}></BlogPost>
              ))}
          </div>
        </section>
      </Wrapper>
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
