import React from 'react';
import Anchor from '../components/Anchor';

function Footer() {
  return (
    <footer>
      <div className="container">
        <Anchor href="/" className="logo-font">
          conduit
        </Anchor>
        <span className="attribution">
          An interactive learning project from{' '}
          <Anchor href="https://thinkster.io">Thinkster</Anchor>. Code &amp; design licensed under
          MIT.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
