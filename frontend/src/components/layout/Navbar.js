import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getMainMenu } from "../../actions/navigation";
import MenuItem from "./MenuItem";

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

  // For now just show loading when it is loading.
  if (loading || !main_menu) {
    return <div>loading</div>;
  }

  return (
    <nav>
      <ul className="main-navigation">
        {Object.keys(main_menu).map(key => (
          <MenuItem key={main_menu[key].ID} menuItem={main_menu[key]} />
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
