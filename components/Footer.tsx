import { Separator } from '@radix-ui/react-separator';

import Wrapper from 'components/Wrapper';
import ExternalLink from 'components/links/ExternalLink';
import InternalLink from 'components/links/InternalLink';
import LinkedInIcon from 'components/icons/LinkedInIcon';
import GitHubIcon from 'components/icons/GitHubIcon';
import WordmarkIcon from 'components/icons/WordmarkIcon';

export default function Footer() {
  return (
    <footer className="w-full bg-grey-0 dark:bg-grey-1000 ring-2 ring-grey-100 dark:ring-grey-900 rounded-tl-[2rem] rounded-tr-[2rem] lg:rounded-tl-[3rem] lg:rounded-tr-[3rem] mt-20">
      <div className="flex flex-col">
        <Wrapper className="w-full flex flex-col md:flex-row gap-y-12 gap-x-7 items-baseline py-12 md:py-16">
          <div className="flex-1/3">
            <InternalLink href="/" aria-label="Eduardo Homepage">
              <WordmarkIcon
                size="wordmark"
                variant="black-and-white"
              ></WordmarkIcon>
            </InternalLink>
          </div>
          <div className="flex-1/3 w-full">
            <span className="font-mono block text-lg tracking-tight font-medium text-grey-1000 dark:text-grey-50 mb-4">
              Resources
            </span>
            <ul className="space-y-1">
              <li>
                <InternalLink href="/projects" variant="secondary">
                  Projects
                </InternalLink>
              </li>
              <li>
                <InternalLink href="/blog" variant="secondary">
                  Blog
                </InternalLink>
              </li>
              <li>
                <InternalLink href="/uses" variant="secondary">
                  Uses
                </InternalLink>
              </li>
              <li>
                <InternalLink href="/snippets" variant="secondary">
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
          <Separator
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
                  <LinkedInIcon
                    label="LinkedIn"
                    size="sm"
                    decorative
                  ></LinkedInIcon>
                </ExternalLink>
              </li>
              <Separator
                decorative
                orientation="vertical"
                className="text-grey-150 dark:text-grey-700 text-xs"
              >
                |
              </Separator>
              <li>
                <ExternalLink
                  href="https://github.com/edroamz"
                  variant="block"
                  aria-label="GitHub"
                >
                  <GitHubIcon label="GitHub" size="sm" decorative></GitHubIcon>
                </ExternalLink>
              </li>
            </ul>
          </div>
        </Wrapper>
      </div>
    </footer>
  );
}
