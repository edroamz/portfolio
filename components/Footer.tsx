import NextLink from 'next/link';
import { ReactNode } from 'react';
import { navItems } from 'data/navItems';

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-4xl mx-auto w-full">
      <div className="w-full px-5 sm:px-12 lg:px-6">
        <hr className="w-full border-1 border-gray-200 dark:border-zinc-800" />
        <div className="w-full grid md:flex grid-cols-1 md:grid-cols-2 items-center justify-between pt-12 pb-20 gap-y-8 ">
          <nav>
            <ul className="text-sm text-neutral-500 dark:text-neutral-400 font-semibold flex gap-x-8">
              {navItems.map(
                ({ uuid, href, text }): ReactNode => (
                  <li key={uuid}>
                    <NextLink href={href}>
                      <a>{text}</a>
                    </NextLink>
                  </li>
                )
              )}
            </ul>
          </nav>
          <span className="text-sm text-neutral-600 dark:text-neutral-500">
            © 2022 Eduardo Ambriz. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
