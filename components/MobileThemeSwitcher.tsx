import { FunctionComponent, useState } from 'react';
import { useTheme } from 'next-themes';

import { Label } from '@radix-ui/react-label';
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
import DarkIcon from 'components/icons/DarkIcon';
import LightIcon from 'components/icons/LightIcon';
import ChevronDownIcon from 'components/icons/ChevronDown';

import { themes } from 'lib/theme';

const MobileThemeSwitcher: FunctionComponent = () => {
  const { theme, setTheme } = useTheme();
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  function toggleSelect() {
    setIsSelectOpen(!isSelectOpen);
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
            className="appearance-none py-2 px-[10px] rounded-lg border bg-white dark:bg-grey-600 border-grey-120 dark:border-grey-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-grey-1000 dark:focus-visible:ring-grey-0"
          >
            <SelectValue asChild>
              <div className="flex items-center justify-center align-middle gap-2 text-grey-400 dark:text-grey-300">
                <DarkIcon decorative variant="hidden-in-light"></DarkIcon>
                <LightIcon decorative variant="hidden-in-dark"></LightIcon>
                <span className="text-grey-900 dark:text-grey-80 capitalize leading-none text-lg font-semibold tracking-wide">
                  {theme}
                </span>
                <ChevronDownIcon
                  decorative
                  variant="secondary"
                ></ChevronDownIcon>
              </div>
            </SelectValue>
          </SelectTrigger>
          <SelectPortal>
            <SelectContent
              style={{ zIndex: 40, userSelect: 'none' }}
              className="shadow bg-grey-50 dark:bg-grey-900 border border-grey-300 dark:border-grey-600 rounded-md py-1"
            >
              <SelectViewport>
                {themes.map((theme) => (
                  <SelectItem
                    key={theme}
                    value={theme}
                    className="w-full capitalize text-base font-semibold leading-none tracking-wide px-[10px] py-2 focus-visible:outline-none border border-transparent hover:bg-grey-100 dark:hover:bg-grey-600/80 focus-visible:bg-grey-100 dark:focus-visible:bg-grey-600/80 active:bg-grey-100 dark:active:bg-grey-600/80"
                  >
                    <SelectItemText>{theme}</SelectItemText>
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
