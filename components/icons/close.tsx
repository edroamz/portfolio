import { IconVariants, IconSizes } from 'lib/theme';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
import { IconProps } from 'components/icons/types';

const CloseIcon = ({
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
      <svg viewBox="0 0 256 256" focusable="false" {...iconProps}>
        <path fill="none" stroke="none" d="M0 0h256v256H0z" />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
          d="M200 56 56 200M200 200 56 56"
        />
      </svg>
      {label && <span className="sr-only">{label}</span>}
    </>
  );
};

export { CloseIcon };
