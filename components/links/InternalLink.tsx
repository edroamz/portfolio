import { ComponentPropsWithRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { SharedLinkProps } from 'components/links/types';

import { twMerge } from 'tailwind-merge';
import { FontWeights, LinkVariants, TextSizes } from 'lib/theme';
import cn from 'classnames';

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

  const classNames: string = twMerge(
    cn(
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
    <Link className={classNames} {...linkProps}>
      {children}
    </Link>
  );
}

export default InternalLink;
