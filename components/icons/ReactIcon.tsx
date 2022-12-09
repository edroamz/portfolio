import { iconVariants, iconSizes } from 'components/theme';
import { twMerge } from 'tailwind-merge';
import cn from 'classnames';
import { IconProps } from 'components/icons/types';

const ReactIcon = ({
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
        viewBox="-11.5 -10.23174 23 20.46348"
        focusable="false"
        {...iconProps}
      >
        <circle cx="0" cy="0" r="2.05" fill="currentColor" />
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
      {label && <span className="sr-only">{label}</span>}
    </>
  );
};

export default ReactIcon;
