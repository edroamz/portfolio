import { ReactNode } from 'react';
import Head from 'next/head';
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav';

import Wordmark from 'components/Wordmark';
import ThemeSwitcher from 'components/ThemeSwitcher';
import MobileMenu from 'components/MobileMenu';
import Footer from 'components/Footer';
import InternalLink from 'components/InternalLink';

interface Props {
  [key: string]: ReactNode;
}

export default function Container(props: Props) {
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
          <div className="h-full flex flex-1 items-center justify-start">
            <InternalLink href="/" variant="wordmark">
              <Wordmark className="h-wordmark text-grey-1000 dark:text-grey-0"></Wordmark>
            </InternalLink>
          </div>
          <div className="h-full hidden md:flex flex-1 items-center justify-center m-0 w-full bg-transparent">
            <nav className="hidden md:flex">
              <ul className="flex items-center gap-x-4">
                <li>
                  <InternalLink href="/projects" variant="nav">
                    Projects
                  </InternalLink>
                </li>
                <li>
                  <InternalLink href="/blog" variant="nav">
                    Blog
                  </InternalLink>
                </li>
                <li>
                  <InternalLink href="/uses" variant="nav">
                    Uses
                  </InternalLink>
                </li>
                <li>
                  <InternalLink href="/snippets" variant="nav">
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
