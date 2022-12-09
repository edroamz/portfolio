import {
  GradientDirectionType,
  GradientVariantType
} from 'components/GradientText';
import { TextSizeType } from 'components/Text';
import { ButtonSizeType, ButtonVariantType } from 'components/Button';
import { LinkVariantType } from 'components/links/types';
import { IconSizeType, IconVariantType } from 'components/icons/types';

export const gradientVariants: {
  [key in GradientVariantType]: string;
} = {
  gotham: 'from-grey-1000 to-grey-800',
  winter:
    'from-cobalt-dark to-electric-dark dark:from-cobalt-light dark:to-electric-light',
  summer:
    'from-coral-dark via-iris-dark to-cobalt-dark dark:from-coral-light dark:via-iris-light dark:to-cobalt-light'
};

export const gradientDirections: { [key in GradientDirectionType]: string } = {
  top: 'bg-gradient-to-t',
  topRight: 'bg-gradient-to-tr',
  right: 'bg-gradient-to-r',
  bottomRight: 'bg-gradient-to-br',
  bottom: 'bg-gradient-to-b',
  bottomLeft: 'bg-gradient-to-bl',
  left: 'bg-gradient-to-l',
  topLeft: 'bg-gradient-to-tl'
};

export const textSizes: { [key in TextSizeType]: string } = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base tracking-tight',
  lg: 'text-lg tracking-tight leading-8',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl md:text-4xl'
};

export const buttonSizes: { [key in ButtonSizeType]: string } = {
  base: 'text-base leading-none tracking-normal'
};

export const buttonVariants: {
  [key in ButtonVariantType]: string;
} = {
  primaryLink:
    'font-medium inline-flex items-center text-cobalt-dark hover:text-grey-1000 dark:text-blue-400 dark:hover:text-grey-100'
};

export const linkVariants: { [key in LinkVariantType]: string } = {
  common:
    'hover:transition-colors hover:duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-grey-1000 dark:focus-visible:ring-grey-0 rounded-sm',
  primary:
    'font-medium inline-flex items-center text-cobalt-dark hover:text-grey-1000 dark:text-blue-400 dark:hover:text-grey-100',
  nav: 'font-medium overflow-hidden px-2 py-1 text-grey-500 hover:text-grey-1000 dark:text-grey-200 dark:hover:text-grey-50 focus-visible:hover:text-grey-1000 dark:focus-visible:hover:text-grey-50',
  'nav-active': 'text-grey-1000 dark:text-grey-50',
  mobileNav:
    'inline-block overflow-hidden font-semibold tracking-normal text-grey-800 hover:text-grey-1000 dark:text-grey-200 dark:hover:text-grey-80',
  footerNav:
    'block text-grey-700 dark:text-grey-300 hover:text-grey-1000 dark:hover:text-grey-120',
  underline:
    'underline decoration-dotted underline-offset-4 decoration-grey-500 text-grey-700 hover:text-grey-1000 dark:text-grey-300 dark:hover:text-grey-120 hover:decoration-grey-1000 dark:hover:decoration-grey-120',
  wordmark:
    'inline-flex items-center justify-center py-2 focus-visible:ring-cobalt-dark',
  block: 'block w-full',
  rounded: 'block rounded-xl'
};

export const iconVariants: { [key in IconVariantType]: string } = {
  common: '',
  default:
    'text-grey-600 group-hover:transition-colors hover:transition-colors group-hover:text-grey-1000 hover:text-grey-1000 dark:text-grey-150 dark:group-hover:text-grey-50 dark:hover:text-grey-50',
  active: 'text-cobalt dark:text-blue-400',
  'non-interactive': 'text-grey-400 dark:text-grey-300',
  hiddenInDark: 'dark:hidden',
  hiddenInLight: 'hidden dark:block',
  reactLogo: 'text-black dark:text-[#61dafb]'
};

export const iconSizes: { [key in IconSizeType]: string } = {
  xs: 'w-4 h-4',
  sm: 'w-5 h-5',
  base: 'w-6 h-6',
  lg: 'w-7 h-7',
  xl: 'w-8 h-8'
};
