import React, { useEffect, useState } from 'react';
import { LoginNav } from './LoginNav';
import { NotLoginNav } from './NotLoginNav';

function Header() {
  const [isLoggdin, setIsLoggedIn] = useState(false);
  // const userData = useSignin({ email, password });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoggedIn(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          conduit
        </a>
        {isLoggdin ? <LoginNav /> : <NotLoginNav />}
      </div>
    </nav>
  );
}

export default Header;
