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
import { SunIcon } from 'components/icons/sun';
import { MoonIcon } from 'components/icons/moon';
import { SystemIcon } from 'components/icons/system';

import { themes } from 'lib/theme';
import classnames from 'classnames';

function ThemeSwitcher() {
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
        className="group invisible md:visible px-2 py-[2px] md:pr-0 ring-0 outline-none focus-visible:ring-2 dark:focus-visible:ring-grey-0 focus-visible:ring-grey-1000 text-grey-400 dark:text-grey-300 hover:text-grey-600 dark:hover:text-grey-150 group-hover:transition-colors data-opened:text-cobalt dark:data-opened:text-blue-400 rounded-md"
      >
        <MoonIcon decorative variant="hidden-in-light"></MoonIcon>
        <SunIcon decorative variant="hidden-in-dark"></SunIcon>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          className="invisible md:visible z-30 w-40 grid grid-cols-1 items-start justify-center bg-white dark:bg-grey-900 shadow dark:shadow-none border border-grey-120 dark:border-grey-880 py-1 rounded-lg"
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
                <SunIcon
                  decorative
                  variant={theme === currentTheme ? 'highlight' : 'secondary'}
                  size="sm"
                ></SunIcon>
              ) : theme === 'dark' ? (
                <MoonIcon
                  decorative
                  variant={theme === currentTheme ? 'highlight' : 'secondary'}
                  size="sm"
                ></MoonIcon>
              ) : (
                <SystemIcon
                  decorative
                  variant={theme === currentTheme ? 'highlight' : 'secondary'}
                  size="sm"
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

export { ThemeSwitcher };
