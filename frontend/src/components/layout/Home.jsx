import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHomePageAction } from '../../actions/pages';
import PostsOverview from '../posts/PostsOverview';
import Page from '../page/Page';

/**
 * Home component.
 *
 * @param {Object} param0
 */
const Home = ({ pages: { staticPages, home }, getHomePage }) => {
  // Call get home page when component loads.
  useEffect(() => {
    if (staticPages === null) {
      getHomePage();
    }
  }, [getHomePage, staticPages]);

  // Do not load anything until home page data is loaded.
  if (staticPages === null) {
    return '';
  }

  // If no homepage was found, show blog overview.
  if (!home) {
    return <PostsOverview />;
  }

  return <Page pageId={home} />;
};

// Set component property types.
Home.propTypes = {
  pages: PropTypes.object.isRequired,
  getHomePage: PropTypes.func.isRequired,
};

// Map application state to component state.
const mapStateToProps = state => ({
  pages: state.pages,
});

// Export component.
export default connect(
  mapStateToProps,
  { getHomePage: getHomePageAction },
)(Home);
