import type { NextPage } from 'next';

import { Separator } from '@radix-ui/react-separator';
import Wrapper from 'components/Wrapper';
import Avatar from 'components/Avatar';
import GradientText from 'components/GradientText';
import InternalLink from 'components/links/InternalLink';
import Container from 'components/Container';
import Product from 'components/Product';
import BlogPost from 'components/BlogPost';

import { getAllFiles } from 'lib/mdx';
import { Post } from 'lib/interfaces';

type HomeProps = {
  allPosts: Post[];
};

const Home: NextPage<HomeProps> = ({ allPosts }) => {
  return (
    <Container>
      <Wrapper>
        <section>
          <div className="mb-6">
            <Avatar></Avatar>
          </div>
          <h1>FrontEnd Engineer, JavaScript Developer</h1>
          <p className="text-xl md:leading-[2.6rem] max-w-prose">
            I’m Eduardo. I write scode, design & build web products. Lorem ipsum
            dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dicta est qui esse veniam quaerat! Lorem ipsum
            dolor sit amet.
          </p>
        </section>
        <section>
          <div className="mb-4">
            <GradientText as="h2" variant="summer">
              <span className="uppercase tracking-wider text-[30px] font-extrabold">
                Curated work
              </span>
            </GradientText>
          </div>
          <h3 className="text-3xl md:text-4xl max-w-5xl mx-auto mb-6">
            Take a sneak peek of my work
          </h3>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 items-stretch justify-between gap-x-16 gap-y-12 md:gap-y-16 mt-12">
            <Product
              product={{
                title: 'Cool website',
                excerpt:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quisquam, eligendi quibusdam placeat a nisi.',
                url: {
                  href: 'https://coolwebsite.com',
                  pathname: 'coolwebsite.com'
                }
              }}
            ></Product>
            <Product
              product={{
                title: 'Another cool website',
                excerpt:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque amet cum voluptatibus eum optio facere atque, minima dolor porro. Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet.',
                url: {
                  href: 'https://anothercoolwebsite.com',
                  pathname: 'anothercoolwebsite.com'
                }
              }}
            ></Product>
          </div>
        </section>
        <section>
          <div className="mb-4">
            <GradientText as="h2" variant="winter">
              <span className="uppercase tracking-wider text-[30px] font-extrabold">
                Featured posts
              </span>
            </GradientText>
          </div>
          <h3 className="text-3xl md:text-4xl max-w-5xl mx-auto mb-6">
            Most popular posts I’ve written
          </h3>

          <div className="relative grid gap-y-2">
            <Separator
              decorative
              orientation="vertical"
              className="absolute left-0 top-[2%] w-0 h-[96%] border-l border-grey-100 dark:border-grey-900 hidden md:block"
            />
            {allPosts &&
              allPosts.map((post: Post) => (
                <BlogPost key={post.slug} post={post} heading="h4"></BlogPost>
              ))}
          </div>

          <div className="mt-7">
            <div className="w-full flex flex-col md:flex-row md:gap-x-12 lg:gap-x-14">
              <div className="h-full w-full md:basis-1/5"></div>
              <div className="h-full w-full md:basis-4/5 pl-2 md:pl-4">
                <InternalLink
                  href="/projects"
                  textSize="lg"
                  variant="highlight"
                  fontWeight={500}
                >
                  Read all posts <span className="pl-2">→</span>
                </InternalLink>
              </div>
            </div>
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

export default Home;
