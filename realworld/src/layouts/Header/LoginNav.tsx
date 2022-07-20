import React from 'react';
import Li from '../../components/Li';
import Nav from '../../components/Nav';

export function LoginNav() {
  return (
    <Nav>
      <Li liClassName="nav-item" aClassName="nav-link" iClassName="ion-compose" href="*">
        &nbsp;New Article
      </Li>
      <Li liClassName="nav-item" aClassName="nav-link" iClassName="ion-gear-a" href="*">
        &nbsp;Settings
      </Li>
    </Nav>
  );
}
