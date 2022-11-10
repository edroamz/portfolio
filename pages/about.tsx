import type { NextPage } from 'next';
import * as Tabs from '@radix-ui/react-tabs';

import Container from 'components/Container';
import Wrapper from 'components/Wrapper';

const About: NextPage = () => {
  return (
    <Container title="About - Eduardo R. Ambriz">
      <Wrapper className="py-16 md:py-20">
        <h1 className="mb-7">About Me</h1>
        <div className="flex gap-x-20 gap-y-14">
          <Tabs.Root defaultValue="short">
            <Tabs.List
              aria-label="Bio versions"
              className="border-b border-grey-120 dark:border-grey-880"
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
              <p className="text-lg">
                I’ve worked on tons of little projects over the years but these
                are the ones that I’m most proud of. Many of them are
                open-source.
              </p>
            </Tabs.Content>
            <Tabs.Content value="long" className="py-4 md:py-6">
              <p className="text-lg mb-4">
                I’ve worked on tons of little projects over the years but these
                are the ones that I’m most proud of. Many of them are
                open-source, so if you see something that piques your interest,
                check out the code and contribute if you have ideas for how it
                can be improved.
              </p>
              <p className="text-lg">
                I’ve worked on tons of little projects over the years but these
                are the ones that I’m most proud of. Many of them are
                open-source.
              </p>
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </Wrapper>
    </Container>
  );
};

export default About;
