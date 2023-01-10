import { IconVariants, IconSizes } from 'lib/theme';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
import { IconProps } from 'components/icons/types';

const ChevronDownIcon = ({
  variant = 'primary',
  size = 'base',
  decorative,
  label,
  ...props
}: IconProps) => {
  const classnames: string = twMerge(
    classNames(IconSizes[size], IconVariants[variant])
  );

  const decorativeProps = decorative
    ? { 'aria-hidden': true }
    : { role: 'img' };

  const iconProps = {
    className: classnames,
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

export { ChevronDownIcon };
