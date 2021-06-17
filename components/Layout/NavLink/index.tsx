import Link from 'next/link';
import { FC, ReactNode } from 'react';

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

export const NavLink: FC<NavLinkProps> = ({ href, children }) => {
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  );
};
