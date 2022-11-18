import {
  GradientVariantType,
  GradientDirectionType,
  TextSizeType,
  ButtonSizeType,
  ButtonVariantType,
  LinkVariantType
} from 'lib/types';

export const gradientVariants: {
  [key in GradientVariantType]: string;
} = {
  gotham: 'from-grey-1000 to-grey-800',
  miami:
    'from-cobalt-dark to-electric-dark dark:from-cobalt-light dark:to-electric-light',
  santaMonica:
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
  sm: 'text-sm',
  base: 'text-base tracking-tight',
  lg: 'text-lg tracking-tight leading-8',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl md:text-4xl'
};

export const buttonSizes: { [key in ButtonSizeType]: string } = {
  base: 'text-lg leading-none tracking-tight'
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
    'block overflow-hidden py-4 font-medium text-grey-900 dark:text-grey-150',
  footerNav:
    'block text-grey-700 dark:text-grey-300 hover:text-grey-1000 dark:hover:text-grey-120',
  underline:
    'underline decoration-dotted underline-offset-4 decoration-grey-500 text-grey-700 hover:text-grey-1000 dark:text-grey-300 dark:hover:text-grey-120',
  wordmark:
    'inline-flex items-center justify-center py-2 focus-visible:ring-cobalt-dark',
  block: 'block w-full'
};
