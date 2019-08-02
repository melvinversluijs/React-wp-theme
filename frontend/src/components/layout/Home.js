import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getHomePage } from "../../actions/pages";
import PostsOverview from "../posts/PostsOverview";
import Page from "../page/Page";

/**
 * Home component.
 *
 * @param {Object} param0
 */
const Home = ({ home, getHomePage }) => {
  // Call get home page when component loads.
  useEffect(() => {
    if (!home) {
      getHomePage();
    }
  }, [getHomePage, home]);

  // If no homepage was found, show blog overview.
  if (!home) {
    return <PostsOverview />;
  }

  return <Page pageId={home} />;
};

// Set component property types.
Home.propTypes = {
  home: PropTypes.number,
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
