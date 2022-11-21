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
  textSize?: TextSizeType;
  direction?: GradientDirectionType;
  variant: GradientVariantType;
  as?: TextType;
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
    textSizes[textSize],
    gradientDirections[direction],
    gradientVariants[variant]
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
