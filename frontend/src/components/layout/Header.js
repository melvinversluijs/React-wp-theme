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
      <Logo />
      <Navbar />
    </header>
  );
};

// Export header.
export default Header;
