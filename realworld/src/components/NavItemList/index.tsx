import React from 'react';
import NavItem from '../NavItem';

type Props = {
  isLoggedin: boolean;
};

function NavItemList({ isLoggedin }: Props) {
  if (isLoggedin) {
    return (
      <ul className="nav navbar-nav pull-xs-right">
        <NavItem liClassName="nav-item" aClassName="nav-link" iClassName="ion-compose" href="*">
          &nbsp;New Article
        </NavItem>
        <NavItem liClassName="nav-item" aClassName="nav-link" iClassName="ion-gear-a" href="*">
          &nbsp;Settings
        </NavItem>
      </ul>
    );
  }

  return (
    <ul className="nav navbar-nav pull-xs-right">
      <NavItem liClassName="nav-item" aClassName="nav-link" href="*">
        Home
      </NavItem>
      <NavItem liClassName="nav-item" aClassName="nav-link" href="*">
        Sign in
      </NavItem>
      <NavItem liClassName="nav-item" aClassName="nav-link" href="*">
        Sign up
      </NavItem>
    </ul>
  );
}

export default NavItemList;
