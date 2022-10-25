import NextLink from 'next/link';
import { ReactNode } from 'react';
import { navItems } from 'data/navItems';

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-4xl mx-auto w-full mt-40 lg:mt-56">
      <div className="w-full px-7">
        <hr className="w-full border-t border-color" />
        <div className="w-full grid md:flex grid-cols-1 md:grid-cols-2 items-center justify-between pt-12 pb-24 gap-y-8 ">
          <nav>
            <ul className="flex gap-x-4">
              {navItems.map(
                ({ uuid, href, text }): ReactNode => (
                  <li key={uuid}>
                    <NextLink href={href}>
                      <a className=" px-2 py-2 hover-transition-colors text-grey-500 hover:text-grey-1000 dark:text-grey-400 dark:hover:text-grey-100">
                        {text}
                      </a>
                    </NextLink>
                  </li>
                )
              )}
            </ul>
          </nav>
          <span className=" text-grey-500">
            © 2022 Eduardo Ambriz. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
