/* eslint react/no-danger: 0 */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPageAction, getHomePageAction } from '../../actions/pages';
import PostsOverview from '../posts/PostsOverview';

/**
 * Page component.
 */
const Page = ({
  pages: { home, blog, page },
  getPage,
  getHomePage,
  match,
  pageId,
}) => {
  useEffect(() => {
    if (!home && !blog) {
      getHomePage();
    }

    if (pageId && (!page || page.id !== pageId)) {
      getPage(pageId);
    } else if (
      match &&
      match.params &&
      (!page || page.id !== Number(match.params.id))
    ) {
      getPage(match.params.id);
    }
  }, [getPage, getHomePage, match, pageId, home, blog, page]);

  // Set post overview if it is the blog page.
  if (page && page.id === blog) {
    return <PostsOverview />;
  }

  // Else return the html.
  return (
    page && (
      <div className="page">
        <h1 className="page__title">{page.title.rendered}</h1>
        <div
          className="page__content"
          dangerouslySetInnerHTML={{ __html: page.content.rendered }}
        />
      </div>
    )
  );
};

// Set component property types.
Page.propTypes = {
  page: PropTypes.object,
  getPage: PropTypes.func.isRequired,
  getHomePage: PropTypes.func.isRequired,
};

// Map application state to component properties.
const mapStateToProps = state => ({
  pages: state.pages,
});

// Export component.
export default connect(
  mapStateToProps,
  { getPage: getPageAction, getHomePage: getHomePageAction },
)(Page);
