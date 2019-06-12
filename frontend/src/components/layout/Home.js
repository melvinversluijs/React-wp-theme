import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getHomePage } from "../../actions/pages";

/**
 * Home component.
 *
 * @param {Object} param0
 */
const Home = ({ pages: { home, loading }, getHomePage }) => {
  // Call get home page when component loads.
  useEffect(() => {
    getHomePage();
  }, [getHomePage]);

  // Return loading text while loading, for now.
  if (loading) {
    return <div>loading</div>;
  }

  // If no homepage was found, show blog overview.
  if (!home) {
    return <div>Blog overview</div>;
  }

  return (
    <div>
      <h1>{home.post_title}</h1>
      <p>{home.post_content}</p>
    </div>
  );
};

// Set component property types.
Home.propTypes = {
  pages: PropTypes.object.isRequired,
  getHomePage: PropTypes.func.isRequired
};

// Map application state to component state.
const mapStateToProps = state => ({
  pages: state.pages
});

// Export component.
export default connect(
  mapStateToProps,
  { getHomePage }
)(Home);
