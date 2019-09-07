import React from "react";

// Bring in components.
import Logo from "./Logo";
import Navbar from "./Navbar";

/**
 * Header component.
 */
const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
};

// Export header.
export default Header;
