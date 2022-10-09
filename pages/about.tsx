import type { NextPage } from 'next';
import Container from 'components/Container';
import * as Tabs from '@radix-ui/react-tabs';

const About: NextPage = () => {
  return (
    <Container>
      <div className="max-w-4xl mx-auto pt-12 md:pt-20 pb-4 px-5 sm:px-12 lg:px-6">
        <h1 className="text-black dark:text-white text-3xl sm:text-4xl md:text-5xl font-bold w-full md:max-w-2xl mb-4 md:mb-6">
          Who am I? What’s my story?
        </h1>
        <div className="flex gap-x-20 gap-y-14 mb-20 lg:mb-24">
          <Tabs.Root defaultValue="short">
            <Tabs.List
              aria-label="Bio versions"
              className="border-b border-gray-200 dark:border-zinc-800"
            >
              <Tabs.Trigger
                value="short"
                className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white font-medium border-b-[3px] border-b-transparent px-1 py-2 mr-7 md:mr-8"
              >
                Short
              </Tabs.Trigger>
              <Tabs.Trigger
                value="long"
                className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white font-medium border-b-[3px] border-b-transparent px-1 py-2"
              >
                Long
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="short" className="py-4 md:py-5">
              <p className="max-w-2xl text-gray-700 dark:text-gray-400">
                I’ve worked on tons of little projects over the years but these
                are the ones that I’m most proud of. Many of them are
                open-source.
              </p>
            </Tabs.Content>
            <Tabs.Content value="long" className="py-4 md:py-5">
              <p className="max-w-2xl text-gray-700 dark:text-gray-400 mb-4">
                I’ve worked on tons of little projects over the years but these
                are the ones that I’m most proud of. Many of them are
                open-source, so if you see something that piques your interest,
                check out the code and contribute if you have ideas for how it
                can be improved.
              </p>
              <p className="max-w-2xl text-gray-700 dark:text-gray-400">
                I’ve worked on tons of little projects over the years but these
                are the ones that I’m most proud of. Many of them are
                open-source.
              </p>
            </Tabs.Content>
          </Tabs.Root>
        </div>
        <div className="mb-28">
          <h2 className="text-2xl md:text-3xl font-bold w-full md:max-w-2xl mb-6 lg:mb-10">
            Say hi!
          </h2>
          <ul>
            <li className="mb-4">
              <span className="font-mono font-medium text-gray-900 dark:text-gray-200 tracking-tight">
                Github
              </span>
              :{' '}
              <a
                className="text-indigo-600 dark:text-indigo-300"
                href="https://github.com/edroamz"
              >
                @edroamz
              </a>
            </li>
            <li>
              <span className="font-mono font-medium text-gray-900 dark:text-gray-200 tracking-tight">
                LinkedIn
              </span>
              :{' '}
              <a
                className="text-indigo-600 dark:text-indigo-300"
                href="https://www.linkedin.com/in/edroamz/"
              >
                https://www.linkedin.com/in/edroamz
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default About;
