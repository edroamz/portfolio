import { IconVariants, IconSizes } from 'lib/theme';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
import { IconProps } from 'components/icons/types';

const MenuIcon = ({
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
      <svg viewBox="0 0 24 24" fill="none" focusable="false" {...iconProps}>
        <path
          d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
      {label && <span className="sr-only">{label}</span>}
    </>
  );
};

export { MenuIcon };
