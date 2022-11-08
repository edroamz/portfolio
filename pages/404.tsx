import Link from 'next/link';

import Container from 'components/Container';
import Wrapper from 'components/Wrapper';

export default function NotFound() {
  return (
    <Container title="404 – Eduardo R. Ambriz">
      <Wrapper className="py-16 md:py-20">
        <div className="flex flex-col items-start sm:items-center justify-center gap-y-3">
          <span className="text-coral-dark dark:text-coral font-semibold tracking-widest">
            404
          </span>
          <h1 className="mb-0">Page not found.</h1>
          <p className="text-lg text-left sm:text-center mb-8">
            Sorry, we couldn’t find the page you’re looking for. Please check
            the URL in the address bar and try again.
          </p>
          <Link href="/">
            <a className="inline-block text-lg text-cobalt-dark dark:text-blue-400 font-medium leading-none tracking-tight">
              Go back home
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block h-4 w-4 stroke-current ml-2"
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
      </Wrapper>
    </Container>
  );
}
