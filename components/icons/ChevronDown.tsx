import { IconVariants, IconSizes } from 'lib/theme';
import { twMerge } from 'tailwind-merge';
import cn from 'classnames';
import { IconProps } from 'components/icons/types';

const ChevronDownIcon = ({
  variant = 'primary',
  size = 'base',
  decorative,
  label,
  ...props
}: IconProps) => {
  const classNames: string = twMerge(
    cn(IconSizes[size], IconVariants[variant])
  );

  const decorativeProps = decorative
    ? { 'aria-hidden': true }
    : { role: 'img' };

  const iconProps = {
    className: classNames,
    ...decorativeProps,
    ...props
  };

  return (
    <>
      <svg fill="none" focusable="false" {...iconProps}>
        <path
          d="m15 11-3 3-3-3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
      {label && <span className="sr-only">{label}</span>}
    </>
  );
};

export default ChevronDownIcon;
