import { iconVariants, iconSizes } from 'components/theme';
import { twMerge } from 'tailwind-merge';
import cn from 'classnames';
import { IconProps } from 'components/icons/types';

const LinkedInIcon = ({
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
        fill="currentColor"
        viewBox="0 0 16 16"
        focusable="false"
        {...iconProps}
      >
        <path d="M12.1 15H15L15 9.87c0-2.519-.542-4.454-3.48-4.454-1.121-.042-2.218.54-2.784 1.51V5.648H5.953V15h2.899v-4.626c0-1.22.23-2.4 1.74-2.4 1.489 0 1.508 1.395 1.508 2.48V15ZM1 2.685c0 .924.76 1.685 1.682 1.685.923 0 1.682-.761 1.682-1.686C4.364 1.76 3.604 1 2.682 1 1.76 1 1 1.76 1 2.685ZM1.23 15h2.902V5.648H1.23V15Z"></path>
      </svg>
      {label && <span className="sr-only">{label}</span>}
    </>
  );
};

export default LinkedInIcon;
