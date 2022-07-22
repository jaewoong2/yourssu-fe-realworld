import React from 'react';
import Li from '../../components/Li';
import Nav from '../../components/Nav';

export function NotLoginNav() {
  return (
    <Nav>
      <Li liClassName="nav-item" aClassName="nav-link" href="*">
        Home
      </Li>
      <Li liClassName="nav-item" aClassName="nav-link" href="*">
        Sign in
      </Li>
      <Li liClassName="nav-item" aClassName="nav-link" href="*">
        Sign up
      </Li>
    </Nav>
  );
}
