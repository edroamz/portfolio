import { createElement, PropsWithChildren } from 'react';

import cn from 'classnames';

type WrapperProps = {
  as?: 'div' | 'section' | 'article';
  className?: string;
  [key: string]: any;
};

const Wrapper = ({
  as = 'div',
  className,
  children,
  ...props
}: PropsWithChildren<WrapperProps>) => {
  const type: string = as;
  const classnames: string = cn('max-w-5xl mx-auto px-7', className);
  const componentProps = { className: classnames, ...props };

  return createElement(type, componentProps, children);
};

export default Wrapper;
