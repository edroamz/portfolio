import Link from 'next/link';

import Container from 'components/Container';

export default function NotFound() {
  return (
    <Container title="404 – Eduardo Rodriguez">
      <div className="max-w-4xl mx-auto px-7 flex flex-col items-center justify-center gap-y-4 mt-24">
        <span className="text-coral-dark dark:text-coral font-medium tracking-widest">
          404
        </span>
        <h1 className="mb-0">Page not found.</h1>
        <p className="text-lg text-center mb-4">
          Sorry, we couldn’t find the page you’re looking for. Please check the
          URL in the address bar and try again.
        </p>
        <Link href="/">
          <a className="inline-block text-iris dark:text-iris-light font-medium dark:font-normal">
            Go back home
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block h-3 w-3 stroke-current ml-1"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none" stroke="none"></rect>
              <polyline
                points="96 48 176 128 96 208"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="24"
              ></polyline>
            </svg>
          </a>
        </Link>
      </div>
    </Container>
  );
}
