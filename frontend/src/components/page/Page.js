import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPage } from "../../actions/pages";

/**
 * Page component.
 */
const Page = ({ page, getPage, match }) => {
  useEffect(() => {
    if (!page || !page.id !== match.params.id) {
      getPage(match.params.id);
    }
  }, [getPage, match.params.id]);

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
  getPage: PropTypes.func.isRequired
};

// Map application state to component properties.
const mapStateToProps = state => ({
  page: state.pages.page
});

// Export component.
export default connect(
  mapStateToProps,
  { getPage }
)(Page);
