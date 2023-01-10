import { ComponentPropsWithRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { SharedLinkProps } from 'components/links/types';

import { twMerge } from 'tailwind-merge';
import { FontWeights, LinkVariants, TextSizes } from 'lib/theme';
import classNames from 'classnames';

type InternalLinkProps = ComponentPropsWithRef<typeof Link> &
  SharedLinkProps & { highlightActive?: boolean | undefined };

function InternalLink({
  variant = 'default',
  textSize = 'base',
  fontWeight = 400,
  highlightActive = false,
  children,
  ...props
}: InternalLinkProps): JSX.Element {
  const router = useRouter();
  const isActive: boolean = router.pathname === props.href;

  const defaultClasses: string = LinkVariants['default'];

  const classnames: string = twMerge(
    classNames(
      defaultClasses,
      FontWeights[fontWeight],
      TextSizes[textSize],
      LinkVariants[variant],
      highlightActive && isActive && LinkVariants['bw']
    )
  );

  const linkProps: ComponentPropsWithRef<typeof Link> = {
    ...props
  };

  return (
    <Link className={classnames} {...linkProps}>
      {children}
    </Link>
  );
}

export { InternalLink };
