import Link from 'next/link';
import type { NextPage } from 'next';

import Container from 'components/Container';

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

interface IProjectCardProps {
  slug: string;
  title: string;
  excerpt: string;
}

function ProjectCard({ slug, title, excerpt }: IProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`}>
      <a className="h-full">
        <div className="bg-white shadow-none hover:shadow-lg dark:shadow-none h-full border border-gray-200 dark:bg-zinc-900 dark:border-zinc-800 dark:hover:border-white transition-shadow hover:transition ease-in-out rounded-md">
          <div className="p-6">
            <h2 className="text-black dark:text-white md:text-lg font-semibold w-full md:max-w-xl mb-4">
              {title}
            </h2>
            <p className="max-w-xl text-sm text-gray-700 dark:text-gray-400 mb-4">
              {excerpt}
            </p>
            <span className="text-sm text-indigo-600 dark:text-indigo-300 font-medium">
              Learn more →
            </span>
          </div>
        </div>
      </a>
    </Link>
  );
}

const Projects: NextPage = () => {
  return (
    <Container>
      <div className="max-w-4xl mx-auto pt-12 md:pt-20 pb-4 px-8 lg:px-6">
        <h1 className="text-black dark:text-white text-3xl md:text-5xl font-bold w-full md:max-w-2xl mb-8">
          Things I’ve made trying to put my dent in the universe.
        </h1>
        <p className="max-w-xl mb-8 text-gray-700 dark:text-gray-400">
          I’ve worked on tons of little projects over the years but these are
          the ones that I’m most proud of. Many of them are open-source, so if
          you see something that piques your interest, check out the code and
          contribute if you have ideas for how it can be improved.
        </p>
      </div>
      <div className="w-full mb-8">
        <div className="grid grid-cols-2 lg:grid-cols-3 items-start justify-between max-w-4xl gap-4 md:gap-5 mx-auto pb-20 px-2 lg:px-0">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project}></ProjectCard>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Projects;
