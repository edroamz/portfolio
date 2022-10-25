import type { NextPage } from 'next';
import Container from 'components/Container';
import * as Tabs from '@radix-ui/react-tabs';

const About: NextPage = () => {
  return (
    <Container>
      <div className="max-w-4xl mx-auto pt-12 md:pt-20 px-7">
        <h1>A little about me</h1>
        <div className="flex gap-x-20 gap-y-14 mb-20 lg:mb-24">
          <Tabs.Root defaultValue="short">
            <Tabs.List
              aria-label="Bio versions"
              className="border-b border-color"
            >
              <Tabs.Trigger value="short" className="tab-trigger">
                <span className="tab-trigger__text tab-trigger__text--first ">
                  Short
                </span>
                <span className="tab-trigger__border tab-trigger__border--first"></span>
              </Tabs.Trigger>
              <Tabs.Trigger value="long" className="tab-trigger">
                <span className="tab-trigger__text tab-trigger__text--last">
                  Long
                </span>
                <span className="tab-trigger__border tab-trigger__border--last"></span>
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="short" className="py-4 md:py-6">
              <p className="">
                I’ve worked on tons of little projects over the years but these
                are the ones that I’m most proud of. Many of them are
                open-source.
              </p>
            </Tabs.Content>
            <Tabs.Content value="long" className="py-4 md:py-6">
              <p className=" mb-4">
                I’ve worked on tons of little projects over the years but these
                are the ones that I’m most proud of. Many of them are
                open-source, so if you see something that piques your interest,
                check out the code and contribute if you have ideas for how it
                can be improved.
              </p>
              <p className="">
                I’ve worked on tons of little projects over the years but these
                are the ones that I’m most proud of. Many of them are
                open-source.
              </p>
            </Tabs.Content>
          </Tabs.Root>
        </div>
        <div className="mb-8">
          <h2>Say hi!</h2>
        </div>
        <ul>
          <li className="mb-4">
            <span className="text-lg font-medium text-grey-1000 dark:text-grey-50">
              Github:
            </span>{' '}
            <a
              className="text-iris dark:text-iris-light font-medium dark:font-normal"
              href="https://github.com/edroamz"
            >
              @edroamz
            </a>
          </li>
          <li>
            <span className="text-lg font-medium text-grey-1000 dark:text-grey-50">
              LinkedIn:
            </span>{' '}
            <a
              className="text-iris dark:text-iris-light font-medium dark:font-normal"
              href="https://www.linkedin.com/in/edroamz/"
            >
              https://www.linkedin.com/in/edroamz
            </a>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default About;
