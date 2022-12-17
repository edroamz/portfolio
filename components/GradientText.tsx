import {
  createElement,
  ComponentPropsWithoutRef,
  ReactNode,
  CSSProperties
} from 'react';
import { GradientVariants, GradientDirections, TextSizes } from 'lib/theme';
import cn from 'classnames';

export type TextSizeType = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl';

export type GradientVariantType = 'gotham' | 'winter' | 'summer';

export type GradientDirectionType =
  | 'top'
  | 'top-right'
  | 'right'
  | 'bottom-right'
  | 'bottom'
  | 'bottom-left'
  | 'left'
  | 'topLeft';

type GradientTextType = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4';

type GradientTextProps = ComponentPropsWithoutRef<GradientTextType> & {
  textSize?: TextSizeType;
  direction?: GradientDirectionType;
  variant: GradientVariantType;
  as?: GradientTextType;
  children: ReactNode;
};

const GradientText = ({
  textSize = 'xl',
  direction = 'right',
  variant,
  as = 'span',
  children,
  ...props
}: GradientTextProps): JSX.Element => {
  const type: string = as;
  const classNames: string = cn(
    'inline-block m-0 bg-clip-text font-bold [&_p]:text-[length:inherit] [&_p]:leading-[1.2]',
    TextSizes[textSize],
    GradientDirections[direction],
    GradientVariants[variant]
  );
  const styles: CSSProperties = { WebkitTextFillColor: 'transparent' };
  const componentProps: ComponentPropsWithoutRef<GradientTextType> = {
    className: classNames,
    style: styles,
    ...props
  };

  return createElement(type, componentProps, children);
};

export default GradientText;
