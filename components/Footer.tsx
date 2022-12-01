import * as Separator from '@radix-ui/react-separator';

import Wrapper from 'components/Wrapper';
import Wordmark from 'components/Wordmark';
import ExternalLink from 'components/ExternalLink';
import InternalLink from 'components/InternalLink';

export default function Footer() {
  return (
    <footer className="w-full bg-grey-0 dark:bg-grey-1000 ring-2 ring-grey-100 dark:ring-grey-900 rounded-tl-[2rem] rounded-tr-[2rem] lg:rounded-tl-[3rem] lg:rounded-tr-[3rem] mt-20">
      <div className="flex flex-col">
        <Wrapper className="w-full flex flex-col md:flex-row gap-y-12 gap-x-7 items-baseline py-12 md:py-16">
          <div className="flex-1/3">
            <InternalLink href="/" variant="wordmark">
              <Wordmark className="h-wordmark text-grey-1000 dark:text-grey-50"></Wordmark>
            </InternalLink>
          </div>
          <div className="flex-1/3 w-full">
            <span className="font-mono block text-lg tracking-tight font-medium text-grey-1000 dark:text-grey-50 mb-4">
              Resources
            </span>
            <ul className="space-y-1">
              <li>
                <InternalLink href="/projects" variant="footerNav">
                  Projects
                </InternalLink>
              </li>
              <li>
                <InternalLink href="/blog" variant="footerNav">
                  Blog
                </InternalLink>
              </li>
              <li>
                <InternalLink href="/uses" variant="footerNav">
                  Uses
                </InternalLink>
              </li>
              <li>
                <InternalLink href="/snippets" variant="footerNav">
                  Snippets
                </InternalLink>
              </li>
            </ul>
          </div>
          <div className="flex-1/3 w-full pt-12 md:p-0 border-t border-grey-100 dark:border-grey-880 md:border-none">
            <p className="text-grey-500 dark:text-grey-400">
              This Web site is built with{' '}
              <ExternalLink href="https://nextjs.org/" variant="underline">
                Next.js
              </ExternalLink>
              ,{' '}
              <ExternalLink
                href="https://www.typescriptlang.org/"
                variant="underline"
              >
                Typescript
              </ExternalLink>
              ,{' '}
              <ExternalLink href="https://tailwindcss.com/" variant="underline">
                Tailwind CSS
              </ExternalLink>
              ,{' '}
              <ExternalLink
                href="https://www.radix-ui.com/"
                variant="underline"
              >
                Radix UI
              </ExternalLink>
              , and hosted on{' '}
              <ExternalLink href="https://vercel.com/" variant="underline">
                Vercel
              </ExternalLink>
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
            <ul className="inline-flex flex-row items-center justify-center gap-x-3">
              <li>
                <ExternalLink
                  href="https://www.linkedin.com/in/edroamz/"
                  variant="block"
                >
                  <svg
                    className="h-5 w-5 text-grey-600 group-hover:text-grey-800 dark:text-grey-300 dark:group-hover:text-grey-200"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    role="img"
                    focusable="false"
                  >
                    <path d="M12.1 15H15L15 9.87c0-2.519-.542-4.454-3.48-4.454-1.121-.042-2.218.54-2.784 1.51V5.648H5.953V15h2.899v-4.626c0-1.22.23-2.4 1.74-2.4 1.489 0 1.508 1.395 1.508 2.48V15ZM1 2.685c0 .924.76 1.685 1.682 1.685.923 0 1.682-.761 1.682-1.686C4.364 1.76 3.604 1 2.682 1 1.76 1 1 1.76 1 2.685ZM1.23 15h2.902V5.648H1.23V15Z"></path>
                  </svg>
                </ExternalLink>
              </li>
              <Separator.Root
                decorative
                orientation="vertical"
                className="text-grey-150 dark:text-grey-700 text-xs"
              >
                |
              </Separator.Root>
              <li>
                <ExternalLink href="https://github.com/edroamz" variant="block">
                  <svg
                    className="h-5 w-5 text-grey-600 group-hover:text-grey-800 dark:text-grey-300 dark:group-hover:text-grey-200"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="currentColor"
                      d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"
                    />
                  </svg>
                </ExternalLink>
              </li>
            </ul>
          </div>
        </Wrapper>
      </div>
    </footer>
  );
}
