import { iconVariants, iconSizes } from 'components/theme';
import { twMerge } from 'tailwind-merge';
import cn from 'classnames';
import { IconProps } from 'components/icons/types';

const TwitterIcon = ({
  variant = 'default',
  size = 'base',
  decorative,
  label,
  ...props
}: IconProps) => {
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

  return (
    <>
      <svg
        viewBox="0 0 512 512"
        fill="currentColor"
        focusable="false"
        {...iconProps}
      >
        <path d="M496 109.5a201.8 201.8 0 0 1-56.55 15.3 97.51 97.51 0 0 0 43.33-53.6 197.74 197.74 0 0 1-62.56 23.5A99.14 99.14 0 0 0 348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 0 0 2.54 22.1 280.7 280.7 0 0 1-203-101.3A95.69 95.69 0 0 0 36 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0 1 35.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 0 1-25.94 3.4 94.38 94.38 0 0 1-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0 1 39.5 405.6a203 203 0 0 1-23.5-1.4A278.68 278.68 0 0 0 166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 0 0 496 109.5z" />
      </svg>
      {label && <span className="sr-only">{label}</span>}
    </>
  );
};

export default TwitterIcon;
