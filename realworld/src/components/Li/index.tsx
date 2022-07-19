import React, { ReactNode } from 'react';

type ClassNameProps = {
  liClassName?: string
  aClassName?: string
  iClassName?: string
  href: string
  children: ReactNode
};

function Li({
  liClassName, aClassName, iClassName, href, children,
} : ClassNameProps) {
  return (
    <li className={liClassName}>
      <a className={aClassName} href={href}>
        <i className={iClassName} />
        {children}
      </a>
    </li>
  );
}

export default Li;
