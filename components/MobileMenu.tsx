import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import NextLink from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import { navItems } from 'data/navItems';

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  }

  return (
    <>
      <Dialog.Root open={isMenuOpen} onOpenChange={toggleMenu}>
        <Dialog.Trigger asChild>
          <button
            className="visible md:hidden p-2"
            aria-label="Open menu"
            type="button"
          >
            <MenuIcon aria-hidden="true" />
          </button>
        </Dialog.Trigger>
        <AnimatePresence>
          {isMenuOpen && (
            <Dialog.Portal forceMount>
              <Dialog.Overlay asChild>
                <motion.div
                  className="visible md:invisible fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80 opacity-100"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15, ease: 'easeInOut' }}
                ></motion.div>
              </Dialog.Overlay>
              <Dialog.Content asChild>
                <motion.div
                  className="visible md:invisible fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800 opacity-100 scale-100"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15, ease: 'linear' }}
                >
                  <div className="flex flex-row-reverse items-center justify-between">
                    <Dialog.Close asChild>
                      <button
                        className="p-2"
                        aria-label="Close menu"
                        type="button"
                      >
                        <CrossIcon aria-hidden="true" />
                      </button>
                    </Dialog.Close>
                    <Dialog.Title className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                      Navigation
                    </Dialog.Title>
                  </div>
                  <div>
                    <nav className="mt-6">
                      <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                        {navItems.map(({ uuid, text, href }) => (
                          <li key={uuid}>
                            <NextLink href={href}>
                              <a className="block py-3">{text}</a>
                            </NextLink>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>
    </>
  );
}

function MenuIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M3 9a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9zm0 6.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function CrossIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}
