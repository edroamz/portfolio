import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import * as Popover from '@radix-ui/react-popover';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import cn from 'classnames';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const [isThemeDialogOpen, setIsThemeDialogOpen] = useState(false);

  // After mounting, we have access to the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  function toggleThemeDialog() {
    if (isThemeDialogOpen) {
      setIsThemeDialogOpen(false);
    } else {
      setIsThemeDialogOpen(true);
    }
  }

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <>
      <Popover.Root open={isThemeDialogOpen} onOpenChange={toggleThemeDialog}>
        <Popover.Trigger asChild>
          <button className="theme-trigger group" type="button">
            <svg
              className="h-6 w-6 text-grey-500 group-hover:text-grey-1000 dark:text-grey-400 dark:group-hover:text-grey-100"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              viewBox="0 0 256 256"
            >
              {currentTheme === 'dark' ? (
                <>
                  <path fill="none" stroke="none" d="M0 0h256v256H0z" />
                  <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="20"
                    d="M216 112V64M240 88h-48M168 24v32M184 40h-32M216.7 152.6A91.9 91.9 0 0 1 103.4 39.3h0a92 92 0 1 0 113.3 113.3Z"
                  />
                </>
              ) : (
                <>
                  <path fill="none" stroke="none" d="M0 0h256v256H0z" />
                  <circle
                    cx="128"
                    cy="128"
                    r="60"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="20"
                  />
                  <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="20"
                    d="M128 36V16M62.9 62.9 48.8 48.8M36 128H16M62.9 193.1l-14.1 14.1M128 220v20M193.1 193.1l14.1 14.1M220 128h20M193.1 62.9l14.1-14.1"
                  />
                </>
              )}
            </svg>
            <VisuallyHidden.Root>Theme Switcher</VisuallyHidden.Root>
          </button>
        </Popover.Trigger>
        {isThemeDialogOpen && (
          <Popover.Portal>
            <Popover.Content
              sideOffset={10}
              collisionPadding={{ right: 20 }}
              align="center"
              hideWhenDetached
              asChild
            >
              <ul className="z-20 w-40 grid grid-cols-1 items-start justify-center gap-y-[2px] bg-white dark:bg-grey-900 shadow dark:shadow-none border border-grey-120 dark:border-grey-880 py-1 rounded-lg">
                <li>
                  <Popover.Close asChild>
                    <button
                      className="w-full text-sm text-left hover:bg-grey-50 dark:hover:bg-grey-800 px-3 py-1"
                      onClick={() => setTheme('light')}
                    >
                      <svg
                        className={cn(
                          'inline-block h-5 w-5 mr-3',
                          theme === 'light'
                            ? 'text-cobalt-dark dark:text-blue-400'
                            : 'text-grey-500 dark:text-grey-400'
                        )}
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path fill="none" stroke="none" d="M0 0h256v256H0z" />
                        <circle
                          cx="128"
                          cy="128"
                          r="60"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="20"
                        />
                        <path
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="20"
                          d="M128 36V16M62.9 62.9 48.8 48.8M36 128H16M62.9 193.1l-14.1 14.1M128 220v20M193.1 193.1l14.1 14.1M220 128h20M193.1 62.9l14.1-14.1"
                        />
                      </svg>
                      <span
                        className={cn(
                          'font-semibold',
                          theme === 'light'
                            ? 'text-cobalt-dark dark:text-blue-400'
                            : 'text-grey-880 dark:text-grey-150'
                        )}
                      >
                        Light
                      </span>
                    </button>
                  </Popover.Close>
                </li>
                <li>
                  <Popover.Close asChild>
                    <button
                      className="w-full text-sm text-left hover:bg-grey-50 dark:hover:bg-grey-800 px-3 py-1"
                      onClick={() => setTheme('dark')}
                    >
                      <svg
                        className={cn(
                          'inline-block h-5 w-5 mr-3',
                          theme === 'dark'
                            ? 'text-cobalt-dark dark:text-blue-400'
                            : 'text-grey-500 dark:text-grey-400'
                        )}
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path fill="none" stroke="none" d="M0 0h256v256H0z" />
                        <path
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="20"
                          d="M216 112V64M240 88h-48M168 24v32M184 40h-32M216.7 152.6A91.9 91.9 0 0 1 103.4 39.3h0a92 92 0 1 0 113.3 113.3Z"
                        />
                      </svg>
                      <span
                        className={cn(
                          'font-semibold',
                          theme === 'dark'
                            ? 'text-cobalt-dark dark:text-blue-400'
                            : 'text-grey-880 dark:text-grey-150'
                        )}
                      >
                        Dark
                      </span>
                    </button>
                  </Popover.Close>
                </li>
                <li>
                  <Popover.Close asChild>
                    <button
                      className="w-full text-sm text-left hover:bg-grey-50 dark:hover:bg-grey-800 px-3 py-1"
                      onClick={() => setTheme('system')}
                    >
                      <svg
                        className={cn(
                          'inline-block h-5 w-5 mr-3',
                          theme === 'system'
                            ? 'text-cobalt-dark dark:text-blue-400'
                            : 'text-grey-500 dark:text-grey-400'
                        )}
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path fill="none" d="M0 0h256v256H0z" />
                        <rect
                          x="32"
                          y="48"
                          width="192"
                          height="144"
                          rx="16"
                          transform="rotate(180 128 120)"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="20"
                        />
                        <path
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="20"
                          d="M160 224H96M32 152h192M128 192v32"
                        />
                      </svg>
                      <span
                        className={cn(
                          'font-semibold',
                          theme === 'system'
                            ? 'text-cobalt-dark dark:text-blue-400'
                            : 'text-grey-880 dark:text-grey-150'
                        )}
                      >
                        System
                      </span>
                    </button>
                  </Popover.Close>
                </li>
              </ul>
            </Popover.Content>
          </Popover.Portal>
        )}
      </Popover.Root>
    </>
  );
}
