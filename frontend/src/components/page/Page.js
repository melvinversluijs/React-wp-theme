import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPage } from "../../actions/pages";

/**
 * Page component.
 */
const Page = ({ page, loading, getPage, match }) => {
  useEffect(() => {
    getPage(match.params.id);
  }, [getPage]);

  // If loading, just show loading for now.
  if (loading || !page) {
    return <div>Loading</div>;
  }

  // Else return the html.
  return (
    <div className="page">
      <h1 className="page__title">{page.title.rendered}</h1>
      <div
        className="page__content"
        dangerouslySetInnerHTML={{ __html: page.content.rendered }}
      />
    </div>
  );
};

// Set component property types.
Page.propTypes = {
  page: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  getPage: PropTypes.func.isRequired
};

// Map application state to component properties.
const mapStateToProps = state => ({
  page: state.pages.page,
  loading: state.pages.loading
});

// Export component.
export default connect(
  mapStateToProps,
  { getPage }
)(Page);
