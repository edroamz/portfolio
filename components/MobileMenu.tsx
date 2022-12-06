import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import * as Separator from '@radix-ui/react-separator';
import InternalLink from 'components/InternalLink';
import MobileThemeSwitcher from 'components/MobileThemeSwitcher';
import useIsMobile from 'hooks/use-is-mobile';

export default function MobileMenuNew() {
  const [mounted, setMounted] = useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const isMobile: boolean = useIsMobile();

  useEffect(() => {
    setMounted(true);
  }, []);

  function toggleDialog() {
    if (isDialogOpen) {
      setIsDialogOpen(false);
    } else {
      setIsDialogOpen(true);
    }
  }

  if (!mounted) {
    return null;
  }

  return (
    <Dialog.Root open={isDialogOpen} onOpenChange={toggleDialog} modal>
      <Dialog.Trigger className="visible md:hidden px-2 py-[2px] pr-0  text-grey-600 dark:text-grey-300 hover:text-grey-1000 dark:hover:text-grey-80 hover:transition-colors focus-visible:outline-none focus-visible:ring-2 dark:focus-visible:ring-grey-0 focus-visible:ring-grey-1000 rounded-md group">
        <AccessibleIcon.Root label="Navigation">
          <svg
            className="h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
          >
            <path fill="none" stroke="none" d="M0 0h256v256H0z" />
            <circle cx="128" cy="128" r="18" />
            <circle cx="128" cy="64" r="18" />
            <circle cx="128" cy="192" r="18" />
          </svg>
        </AccessibleIcon.Root>
      </Dialog.Trigger>
      {isMobile && isDialogOpen && (
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 visible md:invisible bg-black/20 dark:bg-grey-970/80 w-screen h-full z-30 backdrop-blur-sm"></Dialog.Overlay>
          <Dialog.Content className="fixed top-4 right-4 visible md:invisible flex flex-col gap-6 w-full max-w-xs bg-white dark:bg-grey-880 rounded-lg shadow-lg p-6 z-40">
            <Dialog.Close className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center ">
              <AccessibleIcon.Root label="Close navigation">
                <svg
                  className="h-5 w-5 stroke-current text-grey-600 dark:text-grey-300 hover:text-grey-1000 dark:hover:text-grey-80"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                >
                  <path fill="none" stroke="none" d="M0 0h256v256H0z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                    d="M200 56 56 200M200 200 56 56"
                  />
                </svg>
              </AccessibleIcon.Root>
            </Dialog.Close>
            <ul className="flex flex-col justify-center gap-3">
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
                <InternalLink href="/blog" variant="mobileNav" textSize="lg">
                  Blog
                </InternalLink>
              </li>
              <li>
                <InternalLink href="/uses" variant="mobileNav" textSize="lg">
                  Uses
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
            </ul>
            <Separator.Root
              decorative
              orientation="horizontal"
              className="border-t border-grey-120 dark:border-grey-700"
            ></Separator.Root>
            <MobileThemeSwitcher></MobileThemeSwitcher>
          </Dialog.Content>
        </Dialog.Portal>
      )}
    </Dialog.Root>
  );
}
