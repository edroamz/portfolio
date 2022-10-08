import Link from 'next/link';

import Container from 'components/Container';

export default function NotFound() {
  return (
    <Container title="404 – Eduardo Rodriguez">
      <div className="max-w-4xl mx-auto pb-4 px-8 lg:px-6 mb-40 mt-40 grid grid-cols-1 items-center justify-center">
        <span className="text-indigo-600 dark:text-indigo-300 font-semibold text-center mb-4">
          404
        </span>
        <h1 className="text-black dark:text-white text-3xl sm:text-4xl md:text-5xl font-bold w-full md:max-w-2xl mb-4 md:mb-6 text-center mx-auto">
          Page not found.
        </h1>
        <p className="max-w-xl mb-8 text-gray-700 dark:text-gray-400 text-center mx-auto md:text-lg">
          Sorry, we couldn’t find the page you’re looking for. Please check the
          URL in the address bar and try again.
        </p>
        <Link href="/">
          <a className="text-indigo-600 dark:text-indigo-300 font-medium text-center text-lg">
            Go back home →
          </a>
        </Link>
      </div>
    </Container>
  );
}
