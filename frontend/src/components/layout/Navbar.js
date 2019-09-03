import React, { useEffect, useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMainMenu } from '../../actions/navigation';
import MenuItem from './MenuItem';

/**
 * Navbar component.
 *
 * @param {Object} props
 */
const Navbar = ({ navigation: { main_menu }, getMainMenu }) => {
  // Trigger getMainMenu after loading component.
  useEffect(() => {
    getMainMenu();
  }, [getMainMenu]);

  // By default, menu is closed.
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  /**
   * Toggle mobile menu.
   */
  const toggleMobileMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };

  return (
    main_menu && (
      <Fragment>
        <nav
          className={
            'header__nav' + (isMobileMenuActive ? ' header__nav--active' : '')
          }
        >
          <ul className="header__nav-list header__nav-list--root">
            {Object.keys(main_menu).map(key => (
              <MenuItem key={main_menu[key].ID} menuItem={main_menu[key]} />
            ))}
          </ul>
        </nav>
        <button
          className="header__nav-mobile-toggle"
          onClick={toggleMobileMenu}
        >
          <i className="header__nav-mobile-toggle-icon" />
        </button>
      </Fragment>
    )
  );
};

// Set property types.
Navbar.propTypes = {
  navigation: PropTypes.object.isRequired,
  getMainMenu: PropTypes.func.isRequired,
};

// Map application state to component state.
const mapStateToProps = state => ({
  navigation: state.navigation,
});

// Export component.
export default connect(
  mapStateToProps,
  { getMainMenu },
)(Navbar);
