import { PropsWithChildren } from 'react';
import { TextSizeType } from 'components/GradientText';
import { FontWeightType } from 'components/theme';

export type LinkVariantType =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'non-text'
  | 'highlight'
  | 'bw'
  | 'blend'
  | 'rounded';

export type SharedLinkProps = PropsWithChildren<{
  variant?: LinkVariantType;
  textSize?: TextSizeType;
  fontWeight?: FontWeightType;
}>;
