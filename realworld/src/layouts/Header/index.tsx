import React, { useEffect, useState } from 'react';
import NavItemList from '../../components/NavItemList';

function Header() {
  const [isLoggedin, setIsLoggedIn] = useState(false);
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
        <NavItemList isLoggedin={isLoggedin} />
      </div>
    </nav>
  );
}

export default Header;
