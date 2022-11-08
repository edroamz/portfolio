import { NextPage } from 'next';

import Container from 'components/Container';
import Wrapper from 'components/Wrapper';

const Uses: NextPage = () => {
  return (
    <Container title="Uses - Eduardo R. Ambriz">
      <Wrapper className="py-16 md:py-20">
        <h1>Uses</h1>
        <p className="text-lg mb-7">
          Here’s a collection of things I love and use regularity.
        </p>
        <div className="flex flex-row items-start gap-x-3 w-full bg-white dark:bg-grey-900 py-2 px-5 md:px-6 border border-grey-120 dark:border-grey-700 rounded-lg">
          <span className="text-cobalt-dark dark:text-blue-400 text-lg">
            Full disclosure, some links on this site are affiliate links.
          </span>
        </div>
        <div className="mt-14">
          <h2 className="text-2xl">Office</h2>
          <ul className="list-disc list-inside space-y-1 px-1 md:px-4 text-lg">
            <li>
              <span className="text-grey-700 dark:text-grey-300">
                <a
                  className="font-medium text-grey-900 dark:text-grey-150 hover:transition-colors hover:text-grey-1000 dark:hover:text-grey-50"
                  href="https://google.com"
                >
                  Thing
                </a>{' '}
                — The best tool for something Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </span>
            </li>
            <li>
              <span className="text-grey-700 dark:text-grey-300">
                <a
                  className="font-medium text-grey-900 dark:text-grey-150 hover:transition-colors hover:text-grey-1000 dark:hover:text-grey-50"
                  href="https://google.com"
                >
                  Thing
                </a>{' '}
                — The best tool for something
              </span>
            </li>
            <li>
              <span className="text-grey-700 dark:text-grey-300">
                <a
                  className="font-medium text-grey-900 dark:text-grey-150 hover:transition-colors hover:text-grey-1000 dark:hover:text-grey-50"
                  href="https://google.com"
                >
                  Thing
                </a>{' '}
                — The best tool for something
              </span>
            </li>
            <li>
              <span className="text-grey-700 dark:text-grey-300">
                <a
                  className="font-medium text-grey-900 dark:text-grey-150 hover:transition-colors hover:text-grey-1000 dark:hover:text-grey-50"
                  href="https://google.com"
                >
                  Thing
                </a>{' '}
                — The best tool for something
              </span>
            </li>
            <li>
              <span className="text-grey-700 dark:text-grey-300">
                <a
                  className="font-medium text-grey-900 dark:text-grey-150 hover:transition-colors hover:text-grey-1000 dark:hover:text-grey-50"
                  href="https://google.com"
                >
                  Thing
                </a>{' '}
                — The best tool for something
              </span>
            </li>
          </ul>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Uses;