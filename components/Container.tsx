import { ReactNode } from 'react';
import Head from 'next/head';

import { SkipNavLink, SkipNavContent } from '@reach/skip-nav';
import ThemeSwitcher from 'components/ThemeSwitcher';
import MobileMenu from 'components/MobileMenu';
import Footer from 'components/Footer';
import InternalLink from 'components/links/InternalLink';
import WordmarkIcon from 'components/icons/WordmarkIcon';

type ContainerProps = {
  [key: string]: ReactNode;
};

export default function Container(props: ContainerProps) {
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
      <SkipNavLink>Skip to content</SkipNavLink>
      <div className="h-header sticky flex flex-col justify-center top-0 w-full max-w-full shadow-border-bottom dark:shadow-border-bottom-dark bg-white/80 dark:bg-grey-970/80 z-20">
        <header className="static flex flex-row items-center gap-x-4 w-full max-w-5xl mx-auto px-7">
          <div className="h-full flex flex-1 items-center justify-start [&_a]:py-2 [&_a:focus-visible]:ring-cobalt-dark">
            <InternalLink href="/" aria-label="Eduardo Homepage">
              <WordmarkIcon
                size="wordmark"
                variant="black-and-white"
              ></WordmarkIcon>
            </InternalLink>
          </div>
          <div className="h-full hidden md:flex flex-1 items-center justify-center m-0 w-full bg-transparent">
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
          </div>
          <div className="h-full flex flex-1 items-center justify-end">
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
