import { useState } from 'react';
import * as Popover from '@radix-ui/react-popover';
import cn from 'classnames';
import { motion, AnimatePresence } from 'framer-motion';

import InternalLink from 'components/InternalLink';

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
          className="visible md:hidden px-2 py-1 pr-0 h-8 w-8 hover:transition-colors focus-visible:outline-none focus-visible:ring-2 dark:focus-visible:ring-grey-0 focus-visible:ring-grey-1000 rounded-md group"
          type="button"
          aria-label="Menu"
        >
          <div className="flex flex-col items-center justify-center w-full h-full">
            <div
              className={cn(
                'transition h-px w-6 bg-grey-500 group-hover:bg-grey-1000 dark:bg-grey-400 dark:group-hover:bg-grey-100',
                isMenuOpen
                  ? '-rotate-45 translate-y-[1px]'
                  : 'translate-y-[5px]'
              )}
            ></div>
            <div
              className={cn(
                'transition h-px w-6 bg-grey-500 group-hover:bg-grey-1000 dark:bg-grey-400 dark:group-hover:bg-grey-100',
                isMenuOpen ? 'rotate-45' : '-translate-y-[5px]'
              )}
            ></div>
          </div>
        </button>
      </Popover.Trigger>
      <AnimatePresence>
        {isMenuOpen && (
          <Popover.Portal forceMount>
            <Popover.Content sideOffset={22} align="center" asChild>
              <motion.nav
                className="visible md:invisible h-content w-screen inset-x-4 z-10 bg-white dark:bg-grey-970 opacity-100 translate-y-0"
                initial={{ opacity: 0, translateY: '2rem' }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15, ease: 'linear' }}
              >
                <ul className="h-full px-7 py-12 divide-y divide-grey-150 dark:divide-grey-800">
                  <li>
                    <InternalLink
                      href="/projects"
                      variant="mobileNav"
                      textSize="lg"
                    >
                      Projects
                    </InternalLink>
                  </li>
                  <li>
                    <InternalLink
                      href="/blog"
                      variant="mobileNav"
                      textSize="lg"
                    >
                      Blog
                    </InternalLink>
                  </li>
                  <li>
                    <InternalLink
                      href="/snippets"
                      variant="mobileNav"
                      textSize="lg"
                    >
                      Snippets
                    </InternalLink>
                  </li>
                  <li>
                    <InternalLink
                      href="/about"
                      variant="mobileNav"
                      textSize="lg"
                    >
                      About
                    </InternalLink>
                  </li>
                  <li>
                    <InternalLink
                      href="/uses"
                      variant="mobileNav"
                      textSize="lg"
                    >
                      Uses
                    </InternalLink>
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
