import cn from 'classnames';
import { ComponentPropsWithRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { iconSizes, iconVariants } from 'components/theme';
import { IconSizeType, IconVariantType } from 'lib/types';
import { iconTypes } from 'utils/iconTypes';

type IconComponentProps = Omit<ComponentPropsWithRef<'svg'>, 'className'> & {
  name: string;
  variant?: IconVariantType;
  size?: IconSizeType;
  decorative?: boolean;
};

const IconComponent = ({
  name,
  variant = 'default',
  size = 'base',
  decorative,
  ...props
}: IconComponentProps) => {
  const Icon = iconTypes[name];

  const commonClasses: string = iconVariants['common'];
  const classNames: string = twMerge(
    cn(commonClasses, iconSizes[size], iconVariants[variant])
  );

  const decorativeProps = decorative
    ? { 'aria-hidden': true }
    : { role: 'img' };

  const iconProps = {
    className: classNames,
    ...decorativeProps,
    ...props
  };

  return <Icon focusable="false" {...iconProps} />;
};

export default IconComponent;
