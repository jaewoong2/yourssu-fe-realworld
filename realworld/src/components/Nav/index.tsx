import React from 'react';
import Li from '../Li';

type StatusProps = {
  statusList: {
    liClassName?: string;
    aClassName?: string;
    iClassName?: string;
    href: string;
    children?: React.ReactNode;
  }[];
};

function CommonNav({ statusList }: StatusProps) {
  return (
    <ul className="nav navbar-nav pull-xs-right">
      {statusList.map(({ liClassName, aClassName, iClassName, href, children }) => (
        <Li liClassName={liClassName} aClassName={aClassName} iClassName={iClassName} href={href}>
          {children}
        </Li>
      ))}
    </ul>
  );
}

export default CommonNav;
