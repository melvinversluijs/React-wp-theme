import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getMainMenu } from "../../actions/navigation";

/**
 * Navbar component.
 *
 * @param {Object} props
 */
const Navbar = ({ navigation: { main_menu, loading }, getMainMenu }) => {
  // Trigger getMainMenu after loading component.
  useEffect(() => {
    getMainMenu();
  }, [getMainMenu]);

  if (loading || !main_menu) {
    return <div>loading</div>;
  }

  return (
    <nav>
      <ul>
        {Object.keys(main_menu).map(key => (
          <li key={main_menu[key].ID}>{main_menu[key].title}</li>
        ))}
      </ul>
    </nav>
  );
};

// Set property types.
Navbar.propTypes = {
  navigation: PropTypes.object.isRequired,
  getMainMenu: PropTypes.func.isRequired
};

// Map application state to component state.
const mapStateToProps = state => ({
  navigation: state.navigation
});

// Export component.
export default connect(
  mapStateToProps,
  { getMainMenu }
)(Navbar);
