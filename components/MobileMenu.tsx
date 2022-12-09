import { useEffect, useState } from 'react';

import { Separator } from '@radix-ui/react-separator';
import {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogClose
} from '@radix-ui/react-dialog';
import MobileThemeSwitcher from 'components/MobileThemeSwitcher';
import InternalLink from 'components/links/InternalLink';
import CloseIcon from 'components/icons/CloseIcon';
import MenuIcon from 'components/icons/MenuIcon';

import useIsMobile from 'hooks/use-is-mobile';

export default function MobileMenuNew() {
  const [mounted, setMounted] = useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const isMobile: boolean = useIsMobile();

  useEffect(() => {
    setMounted(true);
  }, []);

  function toggleDialog() {
    setIsDialogOpen(!isDialogOpen);
  }

  if (!mounted) {
    return null;
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={toggleDialog} modal>
      <DialogTrigger className="visible md:hidden px-2 py-[2px] pr-0  text-grey-600 dark:text-grey-300 hover:text-grey-1000 dark:hover:text-grey-80 hover:transition-colors focus-visible:outline-none focus-visible:ring-2 dark:focus-visible:ring-grey-0 focus-visible:ring-grey-1000 rounded-md group">
        <MenuIcon label="Navigation" decorative></MenuIcon>
      </DialogTrigger>
      {isMobile && isDialogOpen && (
        <DialogPortal>
          <DialogOverlay className="fixed inset-0 visible md:invisible bg-black/20 dark:bg-grey-970/80 w-screen h-full z-30 backdrop-blur-sm"></DialogOverlay>
          <DialogContent className="fixed top-4 right-4 visible md:invisible flex flex-col gap-6 w-full max-w-xs bg-white dark:bg-grey-880 rounded-lg shadow-lg p-6 z-40">
            <DialogClose className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center ">
              <CloseIcon
                label="Close navigation"
                size="sm"
                decorative
              ></CloseIcon>
            </DialogClose>
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
            <Separator
              decorative
              orientation="horizontal"
              className="border-t border-grey-120 dark:border-grey-700"
            ></Separator>
            <MobileThemeSwitcher></MobileThemeSwitcher>
          </DialogContent>
        </DialogPortal>
      )}
    </Dialog>
  );
}
