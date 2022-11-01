import type { NextPage } from 'next';

import Container from 'components/Container';
import ProjectCard from 'components/ProjectCard';

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
    title: 'Apple+',
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
      <div className="max-w-5xl mx-auto pt-12 md:pt-20 pb-4 px-7">
        <h1>Things I’ve made trying to put my dent in the universe.</h1>
        <p className="text-lg mb-8">
          I’ve worked on tons of little projects over the years but these are
          the ones that I’m most proud of. Many of them are open-source, so if
          you see something that piques your interest, check out the code and
          contribute if you have ideas for how it can be improved.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 items-start justify-between mx-auto gap-7">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project}></ProjectCard>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Projects;
