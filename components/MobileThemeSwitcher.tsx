import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectPortal,
  SelectContent,
  SelectViewport,
  SelectItem,
  SelectItemText
} from '@radix-ui/react-select';
import { Label } from '@radix-ui/react-label';
import { FunctionComponent, useState } from 'react';
import { useTheme } from 'next-themes';
import { themes } from 'utils/themes';

const MobileThemeSwitcher: FunctionComponent = () => {
  const { theme, setTheme } = useTheme();
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  function toggleSelect() {
    if (isSelectOpen) {
      setIsSelectOpen(false);
    } else {
      setIsSelectOpen(true);
    }
  }

  return (
    <>
      <Select
        open={isSelectOpen}
        onOpenChange={toggleSelect}
        value={theme}
        onValueChange={(selectedTheme: string) => {
          setTheme(selectedTheme);
        }}
      >
        <div className="flex flex-row items-center justify-between gap-2">
          <Label
            htmlFor="theme"
            className="tracking-normal text-lg text-grey-600 dark:text-grey-300"
          >
            Switch theme
          </Label>
          <SelectTrigger
            id="theme"
            className="appearance-none capitalize leading-none text-lg font-semibold tracking-wide text-grey-800 dark:text-grey-120 py-2 px-[10px] rounded-lg border bg-white dark:bg-grey-600 border-grey-120 dark:border-grey-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-grey-1000 dark:focus-visible:ring-grey-0"
          >
            <SelectValue asChild>
              <div className="flex items-center justify-center align-middle gap-2">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-6 h-6 hidden dark:block text-grey-300 fill-current"
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
                  className="w-6 h-6 dark:hidden text-grey-400 stroke-current"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                  <path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"></path>
                </svg>
                <span>{theme}</span>
                <svg
                  className="w-6 h-6 text-grey-400 dark:text-grey-300"
                  fill="none"
                >
                  <path
                    d="m15 11-3 3-3-3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    focusable="false"
                  ></path>
                </svg>
              </div>
            </SelectValue>
          </SelectTrigger>
          <SelectPortal>
            <SelectContent
              style={{ zIndex: 40, userSelect: 'none' }}
              className="shadow bg-grey-50 dark:bg-grey-900 border border-grey-300 dark:border-grey-600 rounded-md py-1"
            >
              <SelectViewport>
                {themes.map(({ id, value, label }) => (
                  <SelectItem
                    key={id}
                    value={value}
                    className="w-full capitalize text-base font-semibold leading-none tracking-wide px-[10px] py-2 focus-visible:outline-none border border-transparent hover:bg-grey-100 dark:hover:bg-grey-600/80 focus-visible:bg-grey-100 dark:focus-visible:bg-grey-600/80 active:bg-grey-100 dark:active:bg-grey-600/80"
                  >
                    <SelectItemText>{label}</SelectItemText>
                  </SelectItem>
                ))}
              </SelectViewport>
            </SelectContent>
          </SelectPortal>
        </div>
      </Select>
    </>
  );
};

export default MobileThemeSwitcher;
