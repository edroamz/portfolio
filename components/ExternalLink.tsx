import { ComponentPropsWithRef, ReactNode } from 'react';
import cn from 'classnames';
import { LinkVariantType, TextSizeType } from 'lib/types';
import { linkVariants, textSizes } from 'components/theme';
import { twMerge } from 'tailwind-merge';

type ExternalLinkType = 'a';

type LinkVariantWithoutNavType = Exclude<
  LinkVariantType,
  'nav' | 'nav-active' | 'footerNav' | 'mobileNav'
>;

type ExternalLinkProps = ComponentPropsWithRef<ExternalLinkType> & {
  variant?: LinkVariantWithoutNavType;
  textSize?: TextSizeType;
  children?: ReactNode;
};

function ExternalLink({
  variant = 'common',
  textSize = 'base',
  children,
  ...props
}: ExternalLinkProps): JSX.Element {
  const commonClasses: string = linkVariants['common'];

  const classNames: string = twMerge(
    cn(commonClasses, textSizes[textSize], linkVariants[variant])
  );

  const linkProps: ComponentPropsWithRef<ExternalLinkType> = {
    ...props
  };

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={classNames}
      {...linkProps}
    >
      {children}
    </a>
  );
}

export default ExternalLink;
