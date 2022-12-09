export type IconVariantType =
  | 'common'
  | 'default'
  | 'active'
  | 'non-interactive'
  | 'hiddenInDark'
  | 'hiddenInLight'
  | 'reactLogo';

export type IconSizeType = 'xs' | 'sm' | 'base' | 'lg' | 'xl';

export type IconProps = {
  variant?: IconVariantType;
  size?: IconSizeType;
  decorative?: boolean;
  label?: string;
};
