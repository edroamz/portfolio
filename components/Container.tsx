import Head from 'next/head';
import NextLink from 'next/link';
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav';

import Wordmark from 'components/Wordmark';
import NavLink from 'components/NavLink';
import DarkModeToggle from 'components/DarkModeToggle';
import MobileMenu from 'components/MobileMenu';
import Footer from 'components/Footer';

export default function Container(props: any) {
  const { children, ...customMeta } = props;
  const meta = {
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
      </Head>
      <SkipNavLink>Skip to content</SkipNavLink>
      <div className="h-header sticky flex flex-col justify-center top-0 w-full max-w-full shadow-border-bottom dark:shadow-border-bottom-dark bg-white dark:bg-grey-970 md:bg-header md:dark:bg-header-dark z-10">
        <header className="static flex flex-row items-center w-full max-w-5xl mx-auto px-7">
          <div className="h-full flex flex-1 items-center justify-start">
            <NextLink href="/">
              <a
                className="flex items-center justify-center text-grey-1000 dark:text-grey-50 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-dark dark:ring-grey-0 rounded-sm"
                aria-label="home"
              >
                <Wordmark className="h-wordmark w-full"></Wordmark>
              </a>
            </NextLink>
          </div>
          <div className="h-full hidden md:flex flex-1 items-center justify-center m-0 w-full bg-transparent">
            <nav className="hidden md:flex">
              <ul className="flex items-center gap-x-4">
                <li>
                  <NavLink href="/projects" text="Projects"></NavLink>
                </li>
                <li>
                  <NavLink href="/blog" text="Blog"></NavLink>
                </li>
                <li>
                  <NavLink href="/about" text="About"></NavLink>
                </li>
                <li>
                  <NavLink href="/snippets" text="Snippets"></NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="h-full flex flex-1 items-center justify-end">
            <div className="flex items-center justify-between gap-x-6">
              <DarkModeToggle></DarkModeToggle>
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
