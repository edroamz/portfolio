import type { NextPage } from 'next';

import Container from 'components/Container';
import Wrapper from 'components/Wrapper';
import Product from 'components/Product';

const projects = [
  {
    id: 0,
    title: 'Spotify',
    excerpt:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, odit.',
    slug: '#'
  },
  {
    id: 1,
    title: 'Apple',
    excerpt:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora dicta saepe sint, dolorum eligendi alias?',
    slug: '#'
  },
  {
    id: 2,
    title: 'Twitter',
    excerpt: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    slug: '#'
  },
  {
    id: 3,
    title: 'Instagram',
    excerpt:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, odit.',
    slug: '#'
  }
];

const Projects: NextPage = () => {
  return (
    <Container title="Projects - Eduardo R. Ambriz">
      <Wrapper>
        <section>
          <h1>Things I’ve made trying to put my dent in the universe.</h1>
          <p className="text-lg mb-8 max-w-prose">
            I’ve worked on tons of little projects over the years but these are
            the ones that I’m most proud of. Many of them are open-source, so if
            you see something that piques your interest, check out the code and
            contribute if you have ideas for how it can be improved.
          </p>

          <div className="grid grid-cols-1 min-[900px]:grid-cols-3 items-start justify-between mx-auto gap-x-10 gap-y-12 min-[900px]:gap-y-10">
            {projects.map((project) => (
              <Product
                key={project.id}
                product={{
                  title: `${project.title}`,
                  excerpt: `${project.excerpt}`,
                  url: {
                    href: 'https://coolwebsite.com',
                    pathname: `${project.title}.com`
                  }
                }}
              ></Product>
            ))}
          </div>
        </section>
      </Wrapper>
    </Container>
  );
};

export default Projects;
