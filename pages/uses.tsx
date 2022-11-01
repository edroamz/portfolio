import { NextPage } from 'next';

import Container from 'components/Container';

const Uses: NextPage = () => {
  return (
    <Container title="Projects - Eduardo R. Ambriz">
      <div className="max-w-5xl mx-auto pt-12 md:pt-20 pb-4 px-7">
        <h1>Uses</h1>
        <p className="text-lg mb-8">
          Here’s a collection of things I love and use regularity.
        </p>
        <div className="mt-16">
          <h2 className="text-3xl">Office</h2>
          <ul className="list-disc list-inside text-lg space-y-1 px-7">
            <li>
              <span className="text-grey-500 dark:text-grey-400">
                <a
                  className="font-medium text-xl text-grey-600 dark:text-grey-200 hover:transition-colors hover:text-grey-1000 dark:hover:text-grey-50"
                  href="https://google.com"
                >
                  Thing
                </a>{' '}
                — The best tool for something Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </span>
            </li>
            <li>
              <span className="text-grey-500 dark:text-grey-400">
                <a
                  className="font-medium text-xl text-grey-600 dark:text-grey-200 hover:transition-colors hover:text-grey-1000 dark:hover:text-grey-50"
                  href="https://google.com"
                >
                  Thing
                </a>{' '}
                — The best tool for something
              </span>
            </li>
            <li>
              <span className="text-grey-500 dark:text-grey-400">
                <a
                  className="font-medium text-xl text-grey-600 dark:text-grey-200 hover:transition-colors hover:text-grey-1000 dark:hover:text-grey-50"
                  href="https://google.com"
                >
                  Thing
                </a>{' '}
                — The best tool for something
              </span>
            </li>
            <li>
              <span className="text-grey-500 dark:text-grey-400">
                <a
                  className="font-medium text-xl text-grey-600 dark:text-grey-200 hover:transition-colors hover:text-grey-1000 dark:hover:text-grey-50"
                  href="https://google.com"
                >
                  Thing
                </a>{' '}
                — The best tool for something
              </span>
            </li>
            <li>
              <span className="text-grey-500 dark:text-grey-400">
                <a
                  className="font-medium text-xl text-grey-600 dark:text-grey-200 hover:transition-colors hover:text-grey-1000 dark:hover:text-grey-50"
                  href="https://google.com"
                >
                  Thing
                </a>{' '}
                — The best tool for something
              </span>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Uses;
