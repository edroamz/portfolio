export type IconVariantType =
  | 'primary'
  | 'secondary'
  | 'highlight'
  | 'bw'
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
