import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Label } from '@radix-ui/react-label';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuContent,
  DropdownMenuItem
} from '@radix-ui/react-dropdown-menu';
import LightIcon from 'components/icons/LightIcon';
import DarkIcon from 'components/icons/DarkIcon';
import SystemIcon from 'components/icons/SystemIcon';

import classnames from 'classnames';
import { themes } from 'utils/themes';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme: currentTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <DropdownMenu modal={false}>
      <VisuallyHidden>
        <Label
          htmlFor="btn-theme"
          className="tracking-normal text-lg text-grey-600 dark:text-grey-300"
        >
          Theme
        </Label>
      </VisuallyHidden>
      <DropdownMenuTrigger
        id="btn-theme"
        className="dropdown-theme-trigger group"
      >
        <DarkIcon decorative variant="hidden-in-light" size="lg"></DarkIcon>
        <LightIcon decorative variant="hidden-in-dark" size="lg"></LightIcon>
      </DropdownMenuTrigger>

      <DropdownMenuPortal>
        <DropdownMenuContent
          className="z-30 w-40 grid grid-cols-1 items-start justify-center bg-white dark:bg-grey-900 shadow dark:shadow-none border border-grey-120 dark:border-grey-880 py-1 rounded-lg"
          sideOffset={36}
          collisionPadding={{ right: 28 }}
          hideWhenDetached
        >
          {themes.map((theme) => (
            <DropdownMenuItem
              key={theme}
              onClick={() => setTheme(theme)}
              className={classnames(
                'w-full flex flex-row items-center justify-start align-middle gap-x-2 outline-none leading-none font-semibold text-sm text-left hover:bg-grey-50 dark:hover:bg-grey-800 focus-visible:bg-grey-50 dark:focus-visible:bg-grey-800 px-3 py-2',
                theme === currentTheme && 'text-cobalt-dark dark:text-blue-400'
              )}
            >
              {theme === 'light' ? (
                <LightIcon
                  decorative
                  variant={theme === currentTheme ? 'highlighted' : 'secondary'}
                ></LightIcon>
              ) : theme === 'dark' ? (
                <DarkIcon
                  decorative
                  variant={theme === currentTheme ? 'highlighted' : 'secondary'}
                ></DarkIcon>
              ) : (
                <SystemIcon
                  decorative
                  variant={theme === currentTheme ? 'highlighted' : 'secondary'}
                ></SystemIcon>
              )}
              <span className="capitalize">{theme}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
}
