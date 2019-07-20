import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getHomePage } from "../../actions/pages";
import PostsOverview from "../posts/PostsOverview";

/**
 * Home component.
 *
 * @param {Object} param0
 */
const Home = ({ home, getHomePage }) => {
  // Call get home page when component loads.
  useEffect(() => {
    getHomePage();
  }, [getHomePage]);

  // If no homepage was found, show blog overview.
  if (!home) {
    return <PostsOverview />;
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
  home: PropTypes.object,
  getHomePage: PropTypes.func.isRequired
};

// Map application state to component state.
const mapStateToProps = state => ({
  home: state.pages.home
});

// Export component.
export default connect(
  mapStateToProps,
  { getHomePage }
)(Home);
