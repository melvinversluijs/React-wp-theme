import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

/**
 * Loading component.
 *
 * @param {Object} props
 */
const Loader = ({ loading }) => {
  // Check if any of the items are currently loading.
  const isLoading = Object.values(loading).find(item => item === true);

  // If something is loading, show loader element.
  return isLoading ? (
    <div className="loader">
      <div className="loader__spinner" />
    </div>
  ) : null;
};

// Set property types.
Loader.propTypes = {
  loading: PropTypes.object.isRequired
};

// Map application state to component properties.
const mapStateToProps = state => ({
  loading: state.loading
});

// Export component.
export default connect(
  mapStateToProps,
  {}
)(Loader);
