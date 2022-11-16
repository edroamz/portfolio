import {
  createElement,
  ComponentPropsWithoutRef,
  ReactNode,
  CSSProperties
} from 'react';
import {
  GradientVariantType,
  GradientDirectionType,
  TextSizeType
} from 'lib/types';
import {
  gradientVariants,
  gradientDirections,
  textSizes
} from 'components/theme';
import cn from 'classnames';

type TextType = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type GradientTextProps = ComponentPropsWithoutRef<TextType> & {
  variant: GradientVariantType;
  direction?: GradientDirectionType;
  textSize?: TextSizeType;
  as?: TextType;
  children: ReactNode;
};

const GradientText = ({
  variant,
  direction = 'right',
  textSize = 'xl',
  as = 'span',
  children,
  ...props
}: GradientTextProps): JSX.Element => {
  const type: string = as;
  const classNames: string = cn(
    'inline-block m-0 bg-clip-text font-bold',
    gradientDirections[direction],
    gradientVariants[variant],
    textSizes[textSize]
  );
  const styles: CSSProperties = { WebkitTextFillColor: 'transparent' };
  const componentProps: ComponentPropsWithoutRef<TextType> = {
    className: classNames,
    style: styles,
    ...props
  };

  return createElement(type, componentProps, children);
};

export default GradientText;
