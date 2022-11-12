import {
  createElement,
  ComponentPropsWithoutRef,
  PropsWithChildren
} from 'react';

type Text = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type As = Extract<keyof JSX.IntrinsicElements, Text>;

type Props = Omit<ComponentPropsWithoutRef<Text>, 'as'> & {
  as?: As | undefined;
};

const GradientText = ({
  as = 'span',
  children,
  ...props
}: PropsWithChildren<Props>) => {
  const type: string = as || 'div';
  const componentProps = { className: 'gradient-text', ...props };

  return createElement(type, componentProps, children);
};

export default GradientText;
