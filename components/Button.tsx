import { ReactNode, ComponentPropsWithoutRef } from 'react';
import { ButtonVariantType, ButtonSizeType } from 'lib/types';
import { buttonVariants, buttonSizes } from 'components/theme';
import cn from 'classnames';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant: ButtonVariantType;
  size?: ButtonSizeType;
  children?: ReactNode;
};

function Button({
  variant,
  size = 'base',
  children,
  ...props
}: ButtonProps): JSX.Element {
  const common: string =
    'hover:transition-colors hover:duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-grey-1000 dark:focus-visible:ring-grey-0 rounded-sm';
  const classNames: string = cn(
    common,
    buttonVariants[variant],
    buttonSizes[size]
  );
  const componentProps: ComponentPropsWithoutRef<'button'> = {
    className: classNames,
    ...props
  };

  return (
    <button type="button" className={classNames} {...componentProps}>
      {children}
    </button>
  );
}

export default Button;
