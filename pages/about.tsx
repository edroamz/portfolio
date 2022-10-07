import type { NextPage } from 'next';
import Container from 'components/Container';
import * as Tabs from '@radix-ui/react-tabs';

const About: NextPage = () => {
  return (
    <Container>
      <div className="max-w-4xl mx-auto pt-12 md:pt-20 pb-4 px-8 lg:px-6">
        <h1 className="text-black dark:text-white text-3xl md:text-5xl font-bold w-full md:max-w-2xl mb-4">
          About Me
        </h1>
        <div className="flex gap-x-20 gap-y-14 mb-16 lg:mb-[4.5rem] pt-2 md:pt-4 lg:pt-5">
          <Tabs.Root defaultValue="short">
            <Tabs.List
              aria-label="Bio versions"
              className="border-b-2 border-gray-200 dark:border-zinc-800"
            >
              <Tabs.Trigger
                value="short"
                className="text-[0.825rem] md:text-[0.9rem] text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white font-medium border-b-[3px] border-b-transparent px-1 py-2 mr-6 md:mr-6"
              >
                Short
              </Tabs.Trigger>
              <Tabs.Trigger
                value="long"
                className="text-[0.825rem] md:text-[0.9rem] text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white font-medium border-b-[3px] border-b-transparent px-1 py-2"
              >
                Long
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="short" className="py-4 md:py-5">
              <p className="max-w-xl text-gray-700 dark:text-gray-400">
                I’ve worked on tons of little projects over the years but these
                are the ones that I’m most proud of. Many of them are
                open-source.
              </p>
            </Tabs.Content>
            <Tabs.Content value="long" className="py-4 md:py-5">
              <p className="max-w-xl text-gray-700 dark:text-gray-400 mb-4">
                I’ve worked on tons of little projects over the years but these
                are the ones that I’m most proud of. Many of them are
                open-source, so if you see something that piques your interest,
                check out the code and contribute if you have ideas for how it
                can be improved.
              </p>
              <p className="max-w-xl text-gray-700 dark:text-gray-400">
                I’ve worked on tons of little projects over the years but these
                are the ones that I’m most proud of. Many of them are
                open-source.
              </p>
            </Tabs.Content>
          </Tabs.Root>
        </div>
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold w-full md:max-w-xl mb-6 lg:mb-10">
            Get in touch
          </h2>
          <ul>
            <li className="mb-4">
              <span className="text-gray-700 dark:text-gray-400">
                Follow on{' '}
                <span className="font-mono font-medium text-gray-900 dark:text-gray-200 tracking-tight">
                  Github
                </span>
                :
              </span>{' '}
              <a className="text-indigo-600 dark:text-indigo-300" href="#">
                @edroamz
              </a>
            </li>
            <li className="mb-4">
              <span className="text-gray-700 dark:text-gray-400">
                Follow on{' '}
                <span className="font-mono font-medium text-gray-900 dark:text-gray-200 tracking-tight">
                  Twitter
                </span>
                :
              </span>{' '}
              <a className="text-indigo-600 dark:text-indigo-300" href="#">
                @edroamz
              </a>
            </li>
            <li>
              <span className="text-gray-700 dark:text-gray-400">
                Follow on{' '}
                <span className="font-mono font-medium text-gray-900 dark:text-gray-200 tracking-tight">
                  LinkedIn
                </span>
                :
              </span>{' '}
              <a className="text-indigo-600 dark:text-indigo-300" href="#">
                @edroamz
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default About;
