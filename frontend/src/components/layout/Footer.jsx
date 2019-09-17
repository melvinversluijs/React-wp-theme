import React from 'react';

/**
 * Footer component.
 */
const Footer = () => {
  // Get date.
  const date = new Date();

  // Return footer.
  return (
    <footer className="footer">
      <p className="footer__copyright">
        &copy;
        {` ${date.getFullYear()} `}
        &ndash;
        {` ${WP_React.title}`}
      </p>
    </footer>
  );
};

// Export footer.
export default Footer;
