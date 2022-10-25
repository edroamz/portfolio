import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect, ReactNode } from 'react';
import { useTheme } from 'next-themes';
import NextLink from 'next/link';
import cn from 'classnames';

import Footer from 'components/Footer';
import MobileMenu from './MobileMenu';

import { navItems } from 'data/navItems';

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
          'tracking-tight px-2 py-2 hover-transition-colors',
          isActive
            ? 'text-grey-1000 dark:text-grey-100'
            : 'text-grey-500 hover:text-grey-1000 dark:text-grey-400 dark:hover:text-grey-100'
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
      <div className="sticky flex flex-col justify-center top-0 w-full max-w-full shadow-border-bottom dark:shadow-border-bottom-dark bg-grey-0 dark:bg-grey-970 md:bg-header md:dark:bg-header-dark z-10">
        <header className="static flex flex-row items-center w-full max-w-4xl mx-auto py-4 px-7">
          <div className="flex flex-1 items-center justify-start">
            <NextLink href="/">
              <a className="flex items-center justify-center gap-x-1 text-grey-1000 dark:text-grey-50">
                <Wordmark></Wordmark>
              </a>
            </NextLink>
          </div>
          <div className="flex flex-1 items-center justify-center m-0 w-full bg-transparent">
            <nav className="hidden md:flex">
              <ul className="flex items-center gap-x-6">
                {navItems.map(
                  ({ uuid, href, text }): ReactNode => (
                    <li key={uuid}>
                      <NavItem href={href} text={text}></NavItem>
                    </li>
                  )
                )}
              </ul>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end">
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

function Wordmark() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="122"
      height="28"
      viewBox="0 0 122 28"
      fill="none"
      className="text-grey-1000 dark:text-grey-50"
    >
      <g clipPath="url(#clip0_336_1038)">
        <g clipPath="url(#clip1_336_1038)">
          <path
            className="stroke-current"
            d="M20 6C20.1667 9.33333 12 18 2 18"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className="stroke-current"
            d="M15 2C12.3333 2.33333 7 5.2 7 14C7 22.8 15 25.6667 19 26"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <path
          className="fill-current"
          d="M34.84 23.288C33.912 23.288 33.08 23.136 32.344 22.832C31.624 22.512 31.008 22.072 30.496 21.512C30 20.936 29.616 20.248 29.344 19.448C29.072 18.632 28.936 17.72 28.936 16.712C28.936 15.72 29.064 14.824 29.32 14.024C29.592 13.224 29.976 12.544 30.472 11.984C30.968 11.408 31.576 10.968 32.296 10.664C33.016 10.344 33.832 10.184 34.744 10.184C35.72 10.184 36.568 10.352 37.288 10.688C38.008 11.024 38.6 11.48 39.064 12.056C39.528 12.632 39.872 13.304 40.096 14.072C40.336 14.824 40.456 15.632 40.456 16.496V17.504H32.128V17.816C32.128 18.728 32.384 19.464 32.896 20.024C33.408 20.568 34.168 20.84 35.176 20.84C35.944 20.84 36.568 20.68 37.048 20.36C37.544 20.04 37.984 19.632 38.368 19.136L40.024 20.984C39.512 21.704 38.808 22.272 37.912 22.688C37.032 23.088 36.008 23.288 34.84 23.288ZM34.792 12.488C33.976 12.488 33.328 12.76 32.848 13.304C32.368 13.848 32.128 14.552 32.128 15.416V15.608H37.264V15.392C37.264 14.528 37.048 13.832 36.616 13.304C36.2 12.76 35.592 12.488 34.792 12.488ZM50.3348 20.912H50.2148C49.9908 21.632 49.5668 22.208 48.9428 22.64C48.3188 23.072 47.5908 23.288 46.7588 23.288C45.1748 23.288 43.9588 22.72 43.1108 21.584C42.2788 20.448 41.8628 18.824 41.8628 16.712C41.8628 14.616 42.2788 13.008 43.1108 11.888C43.9588 10.752 45.1748 10.184 46.7588 10.184C47.5908 10.184 48.3188 10.4 48.9428 10.832C49.5668 11.248 49.9908 11.816 50.2148 12.536H50.3348V5.24H53.4068V23H50.3348V20.912ZM47.7428 20.744C48.4788 20.744 49.0948 20.568 49.5908 20.216C50.0868 19.864 50.3348 19.36 50.3348 18.704V14.72C50.3348 14.112 50.0868 13.624 49.5908 13.256C49.0948 12.888 48.4788 12.704 47.7428 12.704C46.9428 12.704 46.2948 12.976 45.7988 13.52C45.3188 14.048 45.0788 14.76 45.0788 15.656V17.816C45.0788 18.712 45.3188 19.424 45.7988 19.952C46.2948 20.48 46.9428 20.744 47.7428 20.744ZM56.3494 23V10.472H59.4214V13.064H59.5414C59.6214 12.728 59.7414 12.408 59.9014 12.104C60.0774 11.784 60.3014 11.504 60.5734 11.264C60.8454 11.024 61.1654 10.832 61.5334 10.688C61.9174 10.544 62.3574 10.472 62.8534 10.472H63.5254V13.376H62.5654C61.5254 13.376 60.7414 13.528 60.2134 13.832C59.6854 14.136 59.4214 14.632 59.4214 15.32V23H56.3494ZM70.0221 23.288C69.1261 23.288 68.3181 23.136 67.5981 22.832C66.8941 22.528 66.2861 22.088 65.7741 21.512C65.2781 20.936 64.8941 20.248 64.6221 19.448C64.3501 18.632 64.2141 17.72 64.2141 16.712C64.2141 15.704 64.3501 14.8 64.6221 14C64.8941 13.2 65.2781 12.52 65.7741 11.96C66.2861 11.384 66.8941 10.944 67.5981 10.64C68.3181 10.336 69.1261 10.184 70.0221 10.184C70.9181 10.184 71.7261 10.336 72.4461 10.64C73.1661 10.944 73.7741 11.384 74.2701 11.96C74.7821 12.52 75.1741 13.2 75.4461 14C75.7181 14.8 75.8541 15.704 75.8541 16.712C75.8541 17.72 75.7181 18.632 75.4461 19.448C75.1741 20.248 74.7821 20.936 74.2701 21.512C73.7741 22.088 73.1661 22.528 72.4461 22.832C71.7261 23.136 70.9181 23.288 70.0221 23.288ZM70.0221 20.816C70.8381 20.816 71.4781 20.568 71.9421 20.072C72.4061 19.576 72.6381 18.848 72.6381 17.888V15.56C72.6381 14.616 72.4061 13.896 71.9421 13.4C71.4781 12.904 70.8381 12.656 70.0221 12.656C69.2221 12.656 68.5901 12.904 68.1261 13.4C67.6621 13.896 67.4301 14.616 67.4301 15.56V17.888C67.4301 18.848 67.6621 19.576 68.1261 20.072C68.5901 20.568 69.2221 20.816 70.0221 20.816ZM87.1936 23C86.5216 23 85.9856 22.808 85.5856 22.424C85.2016 22.024 84.9616 21.496 84.8656 20.84H84.7216C84.5136 21.656 84.0896 22.272 83.4496 22.688C82.8096 23.088 82.0176 23.288 81.0736 23.288C79.7936 23.288 78.8096 22.952 78.1216 22.28C77.4336 21.608 77.0896 20.712 77.0896 19.592C77.0896 18.296 77.5536 17.336 78.4816 16.712C79.4096 16.072 80.7296 15.752 82.4416 15.752H84.5776V14.84C84.5776 14.136 84.3936 13.592 84.0256 13.208C83.6576 12.824 83.0656 12.632 82.2496 12.632C81.5296 12.632 80.9456 12.792 80.4976 13.112C80.0656 13.416 79.6976 13.784 79.3936 14.216L77.5696 12.584C78.0336 11.864 78.6496 11.288 79.4176 10.856C80.1856 10.408 81.2016 10.184 82.4656 10.184C84.1616 10.184 85.4496 10.568 86.3296 11.336C87.2096 12.104 87.6496 13.208 87.6496 14.648V20.552H88.8976V23H87.1936ZM82.1056 21.056C82.7936 21.056 83.3776 20.904 83.8576 20.6C84.3376 20.296 84.5776 19.848 84.5776 19.256V17.6H82.6096C81.0096 17.6 80.2096 18.112 80.2096 19.136V19.544C80.2096 20.056 80.3696 20.44 80.6896 20.696C81.0256 20.936 81.4976 21.056 82.1056 21.056ZM90.7838 23V10.472H93.8558V12.56H93.9758C94.2158 11.904 94.5998 11.344 95.1278 10.88C95.6558 10.416 96.3918 10.184 97.3358 10.184C98.1998 10.184 98.9438 10.392 99.5678 10.808C100.192 11.224 100.656 11.856 100.96 12.704H101.008C101.232 12 101.672 11.408 102.328 10.928C103 10.432 103.84 10.184 104.848 10.184C106.08 10.184 107.024 10.608 107.68 11.456C108.352 12.304 108.688 13.512 108.688 15.08V23H105.616V15.392C105.616 13.6 104.944 12.704 103.6 12.704C103.296 12.704 103 12.752 102.712 12.848C102.44 12.928 102.192 13.056 101.968 13.232C101.76 13.392 101.592 13.6 101.464 13.856C101.336 14.096 101.272 14.384 101.272 14.72V23H98.1998V15.392C98.1998 13.6 97.5278 12.704 96.1838 12.704C95.8958 12.704 95.6078 12.752 95.3198 12.848C95.0478 12.928 94.7998 13.056 94.5758 13.232C94.3678 13.392 94.1918 13.6 94.0478 13.856C93.9198 14.096 93.8558 14.384 93.8558 14.72V23H90.7838ZM110.601 23V20.552L117.105 12.896H110.817V10.472H120.705V12.848L114.153 20.552H120.873V23H110.601Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_336_1038">
          <rect width="122" height="28" fill="white" />
        </clipPath>
        <clipPath id="clip1_336_1038">
          <rect width="22" height="28" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function Logotype() {
  return (
    <svg
      className="w-8 h-8 stroke-current"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
    >
      <path
        d="M25 8c.167 3.333-8 12-18 12"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 4c-2.667.333-8 3.2-8 12s8 11.667 12 12"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
