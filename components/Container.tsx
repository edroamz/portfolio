import Head from 'next/head';
import { useState, useEffect, ReactNode } from 'react';
import { useTheme } from 'next-themes';
import NextLink from 'next/link';

import Logo from 'components/Logo';
import Wordmark from 'components/Wordmark';
import NavLink from 'components/NavLink';
import MobileMenu from 'components/MobileMenu';
import Footer from 'components/Footer';

import { navLinks } from 'data/navLinks';

export default function Container(props: any) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const meta = {
    title: 'Eduardo Ambriz - Developer, writer.',
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
      <div className="h-[76px] sticky flex flex-col justify-center top-0 w-full max-w-full shadow-border-bottom dark:shadow-border-bottom-dark bg-grey-0 dark:bg-grey-970 md:bg-header md:dark:bg-header-dark z-10">
        <header className="static flex flex-row items-center w-full max-w-4xl mx-auto py-4 px-7">
          <div className="h-full flex flex-1 items-center justify-start">
            <NextLink href="/">
              <a className="flex items-center justify-center gap-x-1 text-grey-1000 dark:text-grey-50 py-2 pr-4 md:pr-2">
                <Wordmark className="h-7 w-full hidden md:block"></Wordmark>
                <Logo className="h-7 w-full block md:hidden"></Logo>
              </a>
            </NextLink>
          </div>
          <div className="h-full flex flex-1 items-center justify-center m-0 w-full bg-transparent">
            <nav className="hidden md:flex">
              <ul className="flex items-center gap-x-6">
                {navLinks.map(
                  ({ uuid, href, text }): ReactNode => (
                    <li key={uuid}>
                      <NavLink href={href} text={text}></NavLink>
                    </li>
                  )
                )}
              </ul>
            </nav>
          </div>
          <div className="h-full flex flex-1 items-center justify-end">
            <div className="flex items-center justify-between gap-x-6">
              <button
                className="p-2 hover-transition-colors"
                aria-label="Toggle Dark Mode"
                type="button"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {mounted && (
                  <svg
                    className="h-6 w-6 text-grey-500 hover:text-grey-1000 dark:text-grey-400 dark:hover:text-grey-100"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    viewBox="0 0 256 256"
                  >
                    {theme === 'dark' ? (
                      <>
                        <path fill="none" stroke="none" d="M0 0h256v256H0z" />
                        <circle
                          cx="128"
                          cy="128"
                          r="60"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="16"
                        />
                        <path
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="16"
                          d="M128 36V16M62.9 62.9 48.8 48.8M36 128H16M62.9 193.1l-14.1 14.1M128 220v20M193.1 193.1l14.1 14.1M220 128h20M193.1 62.9l14.1-14.1"
                        />
                      </>
                    ) : (
                      <>
                        <path fill="none" stroke="none" d="M0 0h256v256H0z" />
                        <path
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="16"
                          d="M216 112V64M240 88h-48M168 24v32M184 40h-32M216.7 152.6A91.9 91.9 0 0 1 103.4 39.3h0a92 92 0 1 0 113.3 113.3Z"
                        />
                      </>
                    )}
                  </svg>
                )}
              </button>
              <MobileMenu />
            </div>
          </div>
        </header>
      </div>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
}
