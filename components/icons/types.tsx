export type IconVariantType =
  | 'primary'
  | 'secondary'
  | 'highlighted'
  | 'black-and-white'
  | 'hidden-in-dark'
  | 'hidden-in-light'
  | 'react-logo';

export type IconSizeType = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | 'wordmark';

export type IconProps = {
  variant?: IconVariantType;
  size?: IconSizeType;
  decorative?: boolean;
  label?: string;
};
