import { iconVariants, iconSizes } from 'components/theme';
import { twMerge } from 'tailwind-merge';
import cn from 'classnames';
import { IconProps } from 'components/icons/types';

const FacebookIcon = ({
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
        <path
          fillRule="evenodd"
          d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
        />
      </svg>
      {label && <span className="sr-only">{label}</span>}
    </>
  );
};

export default FacebookIcon;
