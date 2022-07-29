import React, { ReactNode } from 'react';

type Props = {
  liClassName?: string;
  aClassName?: string;
  iClassName?: string;
  href: string;
  children: ReactNode;
};

function NavItem({ liClassName, aClassName, iClassName, href, children }: Props) {
  return (
    <li className={liClassName}>
      <a className={aClassName} href={href}>
        <i className={iClassName} />
        {children}
      </a>
    </li>
  );
}

export default NavItem;
