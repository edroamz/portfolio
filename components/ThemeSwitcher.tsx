import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Label } from '@radix-ui/react-label';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import cn from 'classnames';
import { themes } from 'utils/themes';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <DropdownMenu.Root modal={false}>
      <VisuallyHidden>
        <Label
          htmlFor="btn-theme"
          className="tracking-normal text-lg text-grey-600 dark:text-grey-300"
        >
          Theme
        </Label>
      </VisuallyHidden>
      <DropdownMenu.Trigger id="btn-theme" className="theme-trigger group">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-7 h-7 hidden dark:block fill-current"
          aria-hidden="true"
          focusable="false"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
            className="fill-transparent"
          ></path>
          <path d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
          ></path>
        </svg>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-7 h-7 dark:hidden stroke-current"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
          <path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"></path>
        </svg>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="z-30 w-40 grid grid-cols-1 items-start justify-center bg-white dark:bg-grey-900 shadow dark:shadow-none border border-grey-120 dark:border-grey-880 py-1 rounded-lg"
          sideOffset={36}
          collisionPadding={{ right: 28 }}
          hideWhenDetached
        >
          {themes.map(({ id, value, label }) => (
            <DropdownMenu.Item
              key={id}
              onClick={() => setTheme(value)}
              className={cn(
                'w-full outline-none leading-none font-semibold text-sm text-left hover:bg-grey-50 dark:hover:bg-grey-800 focus-visible:bg-grey-50 dark:focus-visible:bg-grey-800 px-3 py-2',
                theme === value && 'text-cobalt-dark dark:text-blue-400'
              )}
            >
              <div className="flex flex-row items-center justify-start align-middle gap-x-2">
                {value === 'system' ? (
                  <SystemIcon
                    className={cn(
                      'w-6 h-6 stroke-current',
                      theme === value
                        ? 'text-cobalt dark:text-blue-400'
                        : 'text-grey-400 dark:text-grey-300'
                    )}
                  ></SystemIcon>
                ) : value === 'light' ? (
                  <LightIcon
                    className={cn(
                      'w-6 h-6 stroke-current',
                      theme === value
                        ? 'text-cobalt dark:text-blue-400'
                        : 'text-grey-400 dark:text-grey-300'
                    )}
                  ></LightIcon>
                ) : (
                  <DarkIcon
                    className={cn(
                      'w-6 h-6 fill-current',
                      theme === value
                        ? 'text-cobalt dark:text-blue-400'
                        : 'text-grey-400 dark:text-grey-300'
                    )}
                  ></DarkIcon>
                )}
                <span>{label}</span>
              </div>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

function SystemIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z"
        strokeWidth="2"
        strokeLinejoin="round"
      ></path>
      <path
        d="M14 15c0 3 2 5 2 5H8s2-2 2-5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}

function LightIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
      <path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"></path>
    </svg>
  );
}

function DarkIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
        className="fill-transparent"
      ></path>
      <path d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
      ></path>
    </svg>
  );
}
