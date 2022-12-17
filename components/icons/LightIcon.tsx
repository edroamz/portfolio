import { IconVariants, IconSizes } from 'lib/theme';
import { twMerge } from 'tailwind-merge';
import cn from 'classnames';
import { IconProps } from 'components/icons/types';

const LightIcon = ({
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
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        focusable="false"
        {...iconProps}
      >
        <path fill="none" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
        <path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"></path>
      </svg>
      {label && <span className="sr-only">{label}</span>}
    </>
  );
};

export default LightIcon;
