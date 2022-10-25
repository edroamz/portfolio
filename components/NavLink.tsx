import { useRouter } from 'next/router';
import NextLink from 'next/link';
import cn from 'classnames';

interface INavLinkProps {
  href: string;
  text: string;
}

export default function NavLink({ href, text }: INavLinkProps) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={cn(
          'tracking-tight px-2 py-2 hover-transition-colors',
          isActive
            ? 'text-grey-1000 dark:text-grey-100'
            : 'text-grey-500 hover:text-grey-1000 dark:text-grey-400 dark:hover:text-grey-100'
        )}
      >
        <span>{text}</span>
      </a>
    </NextLink>
  );
}
