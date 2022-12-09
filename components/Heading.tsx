import { ReactNode, createElement, ComponentPropsWithoutRef } from 'react';

export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4';

type HeadingProps = ComponentPropsWithoutRef<HeadingType> & {
  type: HeadingType;
  children: ReactNode;
};

function Heading({
  type = 'h1',
  children,
  ...props
}: HeadingProps): JSX.Element {
  return createElement(type, props, children);
}

export default Heading;
