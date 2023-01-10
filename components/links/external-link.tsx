import { ComponentPropsWithRef } from 'react';

import { SharedLinkProps } from 'components/links/types';

import { twMerge } from 'tailwind-merge';
import { FontWeights, LinkVariants, TextSizes } from 'lib/theme';
import classNames from 'classnames';

type ExternalLinkProps = ComponentPropsWithRef<'a'> & SharedLinkProps;

function ExternalLink({
  variant = 'default',
  textSize = 'base',
  fontWeight = 400,
  children,
  ...props
}: ExternalLinkProps): JSX.Element {
  const defaultClasses: string = LinkVariants['default'];

  const classnames: string = twMerge(
    classNames(
      defaultClasses,
      FontWeights[fontWeight],
      TextSizes[textSize],
      LinkVariants[variant]
    )
  );

  const anchorProps: ComponentPropsWithRef<'a'> = {
    ...props
  };

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={classnames}
      {...anchorProps}
    >
      {children}
    </a>
  );
}

export { ExternalLink };
