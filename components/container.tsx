import { ReactNode } from 'react';
import Head from 'next/head';

import { SkipNavLink, SkipNavContent } from '@reach/skip-nav';
import { ThemeSwitcher } from 'components/theme-switcher';
import { MobileMenu } from 'components/mobile-menu';
import { Footer } from 'components/footer';
import { InternalLink } from 'components/links/internal-link';
import { WordmarkIcon } from 'components/icons/wordmark';

type ContainerProps = {
  [key: string]: ReactNode;
};

function Container(props: ContainerProps) {
  const { children, ...customMeta } = props;
  const meta: { [key: string]: string } = {
    title: 'Eduardo R. Ambriz - Developer, writer.',
    description: `Front-end developer, JavaScript enthusiast.`,
    type: 'website',
    ...customMeta
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <SkipNavLink className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0 focus-visible:w-auto focus-visible:overflow-visible focus-visible:m-0 focus-visible:whitespace-normal focus-visible:fixed focus-visible:top-[10px] focus-visible:left-7 focus-visible:z-50 focus-visible:h-10 focus-visible:flex focus-visible:items-center focus-visible:underline focus-visible:outline-none focus-visible:px-4 focus-visible:font-medium focus-visible:text-cobalt-dark dark:focus-visible:text-blue-400 focus-visible:bg-white dark:focus-visible:bg-grey-970 focus-visible:ring-2 focus-visible:ring-cobalt-dark dark:focus-visible:ring-blue-400 rounded-md">
        Skip to content
      </SkipNavLink>
      <div className="h-header sticky flex flex-col justify-center top-0 w-full max-w-full shadow-border-bottom dark:shadow-border-bottom-dark bg-white/80 dark:bg-grey-970/80 z-20">
        <header className="static flex flex-row items-center gap-x-4 w-full max-w-5xl mx-auto px-7">
          <div className="h-full flex flex-1 items-center justify-start [&_a]:py-2 [&_a:focus-visible]:ring-cobalt-dark">
            <InternalLink href="/" aria-label="Eduardo Homepage">
              <WordmarkIcon size="wordmark" variant="bw"></WordmarkIcon>
            </InternalLink>
          </div>
          <div className="h-full flex flex-1 items-center justify-end gap-x-5">
            <nav className="hidden md:flex">
              <ul className="flex items-center gap-x-5">
                <li>
                  <InternalLink
                    href="/projects"
                    variant="secondary"
                    fontWeight={500}
                    highlightActive
                  >
                    Projects
                  </InternalLink>
                </li>
                <li>
                  <InternalLink
                    href="/blog"
                    variant="secondary"
                    fontWeight={500}
                    highlightActive
                  >
                    Blog
                  </InternalLink>
                </li>
                <li>
                  <InternalLink
                    href="/uses"
                    variant="secondary"
                    fontWeight={500}
                    highlightActive
                  >
                    Uses
                  </InternalLink>
                </li>
                <li>
                  <InternalLink
                    href="/snippets"
                    variant="secondary"
                    fontWeight={500}
                    highlightActive
                  >
                    Snippets
                  </InternalLink>
                </li>
              </ul>
            </nav>
            <div className="flex items-center justify-between gap-x-6">
              <ThemeSwitcher></ThemeSwitcher>
              <MobileMenu />
            </div>
          </div>
        </header>
      </div>
      <SkipNavContent />
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
}

export { Container };
