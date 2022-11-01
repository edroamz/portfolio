import { useState } from 'react';
import * as Popover from '@radix-ui/react-popover';
import cn from 'classnames';
import { motion, AnimatePresence } from 'framer-motion';

import NavLink from 'components/NavLink';

export default function MobileMenuNew() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  }

  return (
    <Popover.Root open={isMenuOpen} onOpenChange={toggleMenu}>
      <Popover.Trigger asChild>
        <button
          className="visible md:hidden p-2 pr-0 h-10 w-10 hover:transition-colors focus-visible:outline-none focus-visible:ring-2 dark:focus-visible:ring-grey-0 focus-visible:ring-grey-1000 rounded-md group"
          type="button"
          aria-label="Menu"
        >
          <div className="flex flex-col items-center justify-center w-full h-full">
            <div
              className={cn(
                'transition h-px w-[22px] bg-grey-500 group-hover:bg-grey-1000 dark:bg-grey-400 dark:group-hover:bg-grey-100',
                isMenuOpen
                  ? '-rotate-45 translate-y-[1px]'
                  : 'translate-y-[5px]'
              )}
            ></div>
            <div
              className={cn(
                'transition h-px w-[22px] bg-grey-500 group-hover:bg-grey-1000 dark:bg-grey-400 dark:group-hover:bg-grey-100',
                isMenuOpen ? 'rotate-45' : '-translate-y-[5px]'
              )}
            ></div>
          </div>
        </button>
      </Popover.Trigger>
      <AnimatePresence>
        {isMenuOpen && (
          <Popover.Portal forceMount>
            <Popover.Content sideOffset={18} align="center" asChild>
              <motion.nav
                className="visible md:invisible h-content w-screen inset-x-4 z-20 bg-white dark:bg-grey-970 opacity-100 translate-y-0"
                initial={{ opacity: 0, translateY: '2rem' }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15, ease: 'linear' }}
              >
                <ul className="h-full px-7 py-12 divide-y divide-grey-150 dark:divide-grey-800 text-base text-grey-1000 dark:text-grey-0">
                  <li>
                    <NavLink
                      className="block text-lg py-4"
                      href="/projects"
                      text="Projects"
                    ></NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="block text-lg py-4"
                      href="/blog"
                      text="Blog"
                    ></NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="block text-lg py-4"
                      href="/about"
                      text="About"
                    ></NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="block text-lg py-4"
                      href="/uses"
                      text="Uses"
                    ></NavLink>
                  </li>
                </ul>
              </motion.nav>
            </Popover.Content>
          </Popover.Portal>
        )}
      </AnimatePresence>
    </Popover.Root>
  );
}
