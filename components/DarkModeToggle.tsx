import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function DarkModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  return (
    <>
      {mounted && (
        <button
          className="px-2 py-1 md:pr-0 hover:transition-colors focus-visible:outline-none focus-visible:ring-2 dark:focus-visible:ring-grey-0 focus-visible:ring-grey-1000 group rounded-md"
          type="button"
          aria-pressed={theme === 'dark'}
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <svg
            className="h-6 w-6 text-grey-500 group-hover:text-grey-1000 dark:text-grey-400 dark:group-hover:text-grey-100"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            viewBox="0 0 256 256"
          >
            {theme === 'dark' ? (
              <>
                <path fill="none" stroke="none" d="M0 0h256v256H0z" />
                <circle
                  cx="128"
                  cy="128"
                  r="60"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                  d="M128 36V16M62.9 62.9 48.8 48.8M36 128H16M62.9 193.1l-14.1 14.1M128 220v20M193.1 193.1l14.1 14.1M220 128h20M193.1 62.9l14.1-14.1"
                />
              </>
            ) : (
              <>
                <path fill="none" stroke="none" d="M0 0h256v256H0z" />
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                  d="M216 112V64M240 88h-48M168 24v32M184 40h-32M216.7 152.6A91.9 91.9 0 0 1 103.4 39.3h0a92 92 0 1 0 113.3 113.3Z"
                />
              </>
            )}
          </svg>
          <VisuallyHidden.Root>Dark mode</VisuallyHidden.Root>
        </button>
      )}
    </>
  );
}
