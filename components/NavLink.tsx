import { useRouter } from 'next/router';
import NextLink from 'next/link';
import cn from 'classnames';

interface INavLinkProps {
  href: string;
  text: string;
  [key: string]: string | number;
}

export default function NavLink({ href, text, ...props }: INavLinkProps) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={cn(
          'tracking-tight px-2 py-3 hover:transition-colors hover:duration-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-grey-1000 focus-visible:hover:text-grey-1000  dark:focus-visible:ring-grey-0 dark:focus-visible:hover:text-grey-50 rounded-sm',
          isActive
            ? 'text-grey-1000 dark:text-grey-50'
            : 'text-grey-600 hover:text-grey-1000 dark:text-grey-300 dark:hover:text-grey-50 '
        )}
        {...props}
      >
        <span>{text}</span>
      </a>
    </NextLink>
  );
}
