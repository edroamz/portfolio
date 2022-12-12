import {
  GradientDirectionType,
  GradientVariantType
} from 'components/GradientText';
import { TextSizeType } from 'components/Text';
import { LinkVariantType } from 'components/links/types';
import { IconSizeType, IconVariantType } from 'components/icons/types';

export type FontWeightType =
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

export const FontWeights: { [key in FontWeightType]: string } = {
  100: 'font-thin',
  200: 'font-extralight',
  300: 'font-light',
  400: 'font-normal',
  500: 'font-medium',
  600: 'font-semibold',
  700: 'font-bold',
  800: 'font-extrabold',
  900: 'font-black'
};

export const GradientVariants: {
  [key in GradientVariantType]: string;
} = {
  gotham: 'from-grey-1000 to-grey-800',
  winter:
    'from-cobalt-dark to-electric-dark dark:from-cobalt-light dark:to-electric-light',
  summer:
    'from-coral-dark via-iris-dark to-cobalt-dark dark:from-coral-light dark:via-iris-light dark:to-cobalt-light'
};

export const GradientDirections: { [key in GradientDirectionType]: string } = {
  top: 'bg-gradient-to-t',
  'top-right': 'bg-gradient-to-tr',
  right: 'bg-gradient-to-r',
  'bottom-right': 'bg-gradient-to-br',
  bottom: 'bg-gradient-to-b',
  'bottom-left': 'bg-gradient-to-bl',
  left: 'bg-gradient-to-l',
  topLeft: 'bg-gradient-to-tl'
};

export const TextSizes: { [key in TextSizeType]: string } = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base tracking-tight',
  lg: 'text-lg tracking-normal',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl md:text-4xl'
};

export const LinkVariants: { [key in LinkVariantType]: string } = {
  default:
    'hover:transition-colors hover:duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-grey-1000 dark:focus-visible:ring-grey-0 rounded-sm',
  primary:
    'inline-flex items-center text-cobalt-dark hover:text-grey-1000 dark:text-blue-400 dark:hover:text-grey-100',
  secondary:
    'tracking-normal overflow-hidden md:p-1 text-grey-500 hover:text-grey-1000 dark:text-grey-200 dark:hover:text-grey-50 focus-visible:hover:text-grey-1000 dark:focus-visible:hover:text-grey-50',
  highlighted: 'text-grey-1000 dark:text-white',
  'black-and-white': 'text-grey-1000 dark:text-grey-150',
  underline:
    'underline decoration-dotted underline-offset-4 decoration-grey-500 text-grey-700 hover:text-grey-1000 dark:text-grey-300 dark:hover:text-grey-120 hover:decoration-grey-1000 dark:hover:decoration-grey-120',
  block: 'block w-full',
  rounded: 'block rounded-xl'
  // default:
  //   '',
  // primary:
  //   'underline decoration-dotted underline-offset-4 decoration-grey-500 text-grey-700 hover:text-grey-1000 dark:text-grey-300 dark:hover:text-grey-120 hover:decoration-grey-1000 dark:hover:decoration-grey-120',
  // secondary:
  //   'tracking-normal overflow-hidden md:p-1 text-grey-500 hover:text-grey-1000 dark:text-grey-200 dark:hover:text-grey-50 focus-visible:hover:text-grey-1000 dark:focus-visible:hover:text-grey-50',
  // 'non-text': '',
  // highlight: 'inline-flex items-center text-cobalt-dark hover:text-grey-1000 dark:text-blue-400 dark:hover:text-grey-100',
  // blend: '',
  // rounded: 'block rounded-xl'
};

export const IconVariants: { [key in IconVariantType]: string } = {
  primary:
    'text-grey-600 group-hover:transition-colors hover:transition-colors group-hover:text-grey-1000 hover:text-grey-1000 dark:text-grey-150 dark:group-hover:text-grey-50 dark:hover:text-grey-50',
  secondary: 'text-grey-400 dark:text-grey-300',
  highlighted: 'text-cobalt dark:text-blue-400',
  'black-and-white': 'text-grey-1000 dark:text-grey-0',
  'hidden-in-dark': 'dark:hidden',
  'hidden-in-light': 'hidden dark:block',
  'react-logo': 'text-[#087EA4] dark:text-[#149ECA]'
};

export const IconSizes: { [key in IconSizeType]: string } = {
  xs: 'w-4 h-4',
  sm: 'w-5 h-5',
  base: 'w-6 h-6',
  lg: 'w-7 h-7',
  xl: 'w-8 h-8',
  wordmark: 'h-wordmark'
};
