import React from 'react';
import cn from 'classnames';

interface IProps {
  as?: 'div' | 'section' | 'article';
  className?: string;
  children: any;
  [key: string]: any;
}

const Wrapper = ({ as, className, children, ...props }: IProps) => {
  const type = as || 'div';
  const classnames = cn('max-w-5xl mx-auto px-7', className);
  const componentProps = { className: classnames, ...props };

  const component = React.createElement(type, componentProps, children);
  return component;
};

Wrapper.defaultProps = {
  as: 'div'
};

export default Wrapper;
