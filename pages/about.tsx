import type { NextPage } from 'next';
import Container from 'components/Container';
import * as Tabs from '@radix-ui/react-tabs';

const About: NextPage = () => {
  return (
    <Container>
      <div className="max-w-4xl mx-auto pt-12 md:pt-16 pb-4 px-8 lg:px-6">
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
                className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white font-medium border-b-[3px] border-b-transparent px-1 py-2 mr-6 md:mr-8"
              >
                Short
              </Tabs.Trigger>
              <Tabs.Trigger
                value="long"
                className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white font-medium border-b-[3px] border-b-transparent px-1 py-2"
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
          {/* <p className="mb-2">
            <a href="#" className="inline-flex items-center justify-start p-2">
              <svg
                className="h-5 w-5 mr-4 fill-black dark:fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z" />
              </svg>
              <span>Follow on Github</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4 fill-black dark:fill-white ml-3"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                  clip-rule="evenodd"
                />
                <path
                  fill-rule="evenodd"
                  d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </p>
          <p>
            <a href="#" className="inline-flex items-center justify-start p-2">
              <svg
                className="h-5 w-5 mr-4 fill-black dark:fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
              </svg>
              <span>Follow on LinkedIn</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4 fill-black dark:fill-white ml-3"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                  clip-rule="evenodd"
                />
                <path
                  fill-rule="evenodd"
                  d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </p> */}
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
