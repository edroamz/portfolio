import { ComponentPropsWithRef, ReactNode } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { LinkVariantType, TextSizeType } from 'lib/types';
import { linkVariants, textSizes } from 'components/theme';
import { useRouter } from 'next/router';
import { twMerge } from 'tailwind-merge';

type internalLinkType = typeof Link;

type InternalLinkProps = ComponentPropsWithRef<internalLinkType> & {
  variant?: LinkVariantType;
  textSize?: TextSizeType;
  children?: ReactNode;
};

function InternalLink({
  variant = 'common',
  textSize = 'base',
  children,
  ...props
}: InternalLinkProps): JSX.Element {
  const router = useRouter();
  const isNav: boolean = variant === 'nav';
  const isActive: boolean = router.pathname === props.href;

  const commonClasses: string = linkVariants['common'];

  const classNames: string = twMerge(
    cn(
      commonClasses,
      textSizes[textSize],
      linkVariants[variant],
      isNav && isActive && linkVariants['nav-active']
    )
  );

  const linkProps: ComponentPropsWithRef<internalLinkType> = {
    ...props
  };

  return (
    <Link className={classNames} {...linkProps}>
      {children}
    </Link>
  );
}

export default InternalLink;
