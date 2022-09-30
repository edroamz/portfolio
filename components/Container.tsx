import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import NextLink from 'next/link';
import cn from 'classnames';

import Footer from 'components/Footer';

interface INavItemProps {
  href: string;
  text: string;
}

function NavItem({ href, text }: INavItemProps) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={cn(
          'text-sm px-2 py-2 transition-colors duration-100',
          isActive
            ? 'font-medium text-black dark:text-white'
            : 'text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white'
        )}
      >
        <span>{text}</span>
      </a>
    </NextLink>
  );
}

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
      <div className="flex flex-col justify-center">
        <div className="flex items-center justify-between w-full relative max-w-4xl mx-auto pt-8 pb-8 px-8 lg:px-6">
          <div>
            <svg
              className="w-4 h-4 text-gray-800 dark:text-gray-200"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 28 28"
            >
              <path d="M0 24.8h28V28H0z" />
              <path d="M0 28V0h28L0 28Z" />
            </svg>
          </div>
          <nav className="hidden md:flex items-center gap-x-4">
            <NavItem href="/" text="Home"></NavItem>
            <NavItem href="/projects" text="Projects"></NavItem>
            <NavItem href="/about" text="About"></NavItem>
          </nav>
          <button
            className="p-2 duration-0 hover:transition hover:duration-300"
            aria-label="Toggle Dark Mode"
            type="button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {mounted && (
              <svg
                className="h-6 w-6 text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
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
                      stroke-linejoin="round"
                      stroke-width="16"
                    />
                    <path
                      fill="none"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      stroke-width="16"
                      d="M128 36V16M62.9 62.9 48.8 48.8M36 128H16M62.9 193.1l-14.1 14.1M128 220v20M193.1 193.1l14.1 14.1M220 128h20M193.1 62.9l14.1-14.1"
                    />
                  </>
                ) : (
                  <>
                    <path fill="none" stroke="none" d="M0 0h256v256H0z" />
                    <path
                      fill="none"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      stroke-width="16"
                      d="M216 112V64M240 88h-48M168 24v32M184 40h-32M216.7 152.6A91.9 91.9 0 0 1 103.4 39.3h0a92 92 0 1 0 113.3 113.3Z"
                    />
                  </>
                )}
              </svg>
            )}
          </button>
        </div>
      </div>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
}
