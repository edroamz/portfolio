import { PropsWithChildren } from 'react';
import { TextSizeType } from 'components/Text';
import { FontWeightType } from 'components/theme';

export type LinkVariantType =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'highlighted'
  | 'black-and-white'
  | 'underline'
  | 'block'
  | 'rounded';

export type SharedLinkProps = PropsWithChildren<{
  variant?: LinkVariantType;
  textSize?: TextSizeType;
  fontWeight?: FontWeightType;
}>;
