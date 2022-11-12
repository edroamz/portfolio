import NextLink from 'next/link';
import Link from 'next/link';
import * as Separator from '@radix-ui/react-separator';

import Wrapper from 'components/Wrapper';
import Wordmark from 'components/Wordmark';

export default function Footer() {
  return (
    <footer className="w-full bg-grey-0 dark:bg-grey-1000 ring-2 ring-grey-80 dark:ring-grey-900 rounded-tl-[2rem] rounded-tr-[2rem] lg:rounded-tl-[3rem] lg:rounded-tr-[3rem] mt-20">
      <div className="flex flex-col">
        <Wrapper className="w-full flex flex-col md:flex-row gap-y-12 gap-x-7 items-baseline py-12 md:py-16">
          <div className="flex-1/3">
            <NextLink href="/">
              <a
                className="inline-flex items-center justify-center text-grey-1000 dark:text-grey-50 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-dark dark:ring-grey-0 rounded-sm"
                aria-label="home"
              >
                <Wordmark className="h-wordmark"></Wordmark>
              </a>
            </NextLink>
          </div>
          <div className="flex-1/3 w-full">
            <span className="font-mono block text-lg tracking-tight font-medium text-grey-1000 dark:text-grey-50 mb-4">
              Resources
            </span>
            <ul className="space-y-4">
              <li>
                <Link href="/projects">
                  <a className="block leading-none hover:transition-colors text-grey-700 dark:text-grey-300 hover:text-grey-1000 dark:hover:text-grey-120">
                    Projects
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a className="block leading-none hover:transition-colors text-grey-700 dark:text-grey-300 hover:text-grey-1000 dark:hover:text-grey-120">
                    Blog
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="block leading-none hover:transition-colors text-grey-700 dark:text-grey-300 hover:text-grey-1000 dark:hover:text-grey-120">
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/uses">
                  <a className="block leading-none hover:transition-colors text-grey-700 dark:text-grey-300 hover:text-grey-1000 dark:hover:text-grey-120">
                    Uses
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/snippets">
                  <a className="block leading-none hover:transition-colors text-grey-700 dark:text-grey-300 hover:text-grey-1000 dark:hover:text-grey-120">
                    Snippets
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="block leading-none hover:transition-colors text-grey-700 dark:text-grey-300 hover:text-grey-1000 dark:hover:text-grey-120">
                    Sitemap.xml
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-1/3 w-full pt-12 md:p-0 border-t border-grey-100 dark:border-grey-880 md:border-none">
            <p className="text-grey-500 dark:text-grey-400">
              This Web site is built with{' '}
              <a
                className="underline decoration-dotted text-grey-700 hover:text-grey-1000 dark:text-grey-300 dark:hover:text-grey-120 hover:transition-colors"
                href="https://nextjs.org/"
              >
                Next.js
              </a>
              ,{' '}
              <a
                className="underline decoration-dotted text-grey-700 hover:text-grey-1000 dark:text-grey-300 dark:hover:text-grey-120 hover:transition-colors"
                href="https://www.typescriptlang.org/"
              >
                Typescript
              </a>
              ,{' '}
              <a
                className="underline decoration-dotted text-grey-700 hover:text-grey-1000 dark:text-grey-300 dark:hover:text-grey-120 hover:transition-colors"
                href="https://tailwindcss.com/"
              >
                Tailwind CSS
              </a>
              ,{' '}
              <a
                className="underline decoration-dotted text-grey-700 hover:text-grey-1000 dark:text-grey-300 dark:hover:text-grey-120 hover:transition-colors"
                href="https://www.radix-ui.com/"
              >
                Radix UI
              </a>
              , and hosted on{' '}
              <a
                className="underline decoration-dotted text-grey-700 hover:text-grey-1000 dark:text-grey-300 dark:hover:text-grey-120 hover:transition-colors"
                href="https://vercel.com/"
              >
                Vercel
              </a>
              .
            </p>
          </div>
        </Wrapper>
        <div className="w-full max-w-5xl mx-auto md:px-7">
          <Separator.Root
            decorative
            orientation="horizontal"
            className="border-t border-grey-100 dark:border-grey-880 md:w-full md:max-w-5xl md:mx-auto"
          />
        </div>
        <Wrapper className="w-full flex flex-col-reverse md:items-center md:flex-row md:justify-between pt-12 pb-24 gap-y-7">
          <span className="text-sm text-grey-500 dark:text-grey-400">
            © 2022 Eduardo R. Ambriz. All rights reserved.
          </span>
          <div>
            <ul className="inline-flex flex-row items-center gap-x-4">
              <li>
                <a
                  className="group hover:transition-colors"
                  href="https://www.linkedin.com/in/edroamz/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className="inline-flex h-6 w-6 text-grey-500 group-hover:text-grey-700 dark:text-grey-400 dark:group-hover:text-grey-200"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="currentColor"
                      d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 0 1-1.548-1.549 1.548 1.548 0 1 1 1.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"
                    />
                  </svg>
                </a>
              </li>
              <Separator.Root
                decorative
                orientation="vertical"
                className="inline-flex w-px h-5 bg-grey-120 dark:bg-grey-880"
              ></Separator.Root>
              <li>
                <a
                  className="group hover:transition-colors"
                  href="https://github.com/edroamz"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className="inline-flex h-6 w-6 text-grey-500 group-hover:text-grey-700 dark:text-grey-400 dark:group-hover:text-grey-200"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="currentColor"
                      d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </Wrapper>
      </div>
    </footer>
  );
}
