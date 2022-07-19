import React from 'react';
import Li from '../components/Li';

function Header() {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <a className="navbar-brand" href="index.html">conduit</a>
        <ul className="nav navbar-nav pull-xs-right">
          <Li liClassName="nav-item" aClassName="nav-link" href="*">
            Home
          </Li>
          <Li liClassName="nav-item" aClassName="nav-link" iClassName="ion-compose" href="*">
            &nbsp;New Article
          </Li>
          <Li liClassName="nav-item" aClassName="nav-link" iClassName="ion-gear-a" href="*">
            &nbsp;Settings
          </Li>
          <Li liClassName="nav-item" aClassName="nav-link" href="*">
            Sign in
          </Li>
          <Li liClassName="nav-item" aClassName="nav-link" href="*">
            Sign up
          </Li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
