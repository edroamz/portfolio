import { PropsWithChildren } from 'react';
import { TextSizeType } from 'components/gradient-text';
import { FontWeightType } from 'lib/theme';

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
