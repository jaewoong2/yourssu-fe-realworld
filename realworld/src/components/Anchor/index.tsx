import React, { ReactNode } from 'react';

type Props = {
  href: string;
  className?: string;
  children?: ReactNode;
};

function Anchor({ href, className, children }: Props) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

export default Anchor;
