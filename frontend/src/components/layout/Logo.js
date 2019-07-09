import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getLogo } from "../../actions/general";

/**
 * Logo component.
 *
 * @param {Object} param0
 */
const Logo = ({ general: { logo, loading }, getLogo }) => {
  // Call getLogo when component is loaded.
  useEffect(() => {
    getLogo();
  }, [getLogo]);

  return (
    <div className="header__logo">
      <Link className="header__logo-link" to="/">
        {!loading && logo ? (
          <img
            className="header__logo-img"
            src={logo.src}
            alt={logo.alt ? logo.alt : WP_React.title}
          />
        ) : (
          <span className="header__logo-text">{WP_React.title}</span>
        )}
      </Link>
    </div>
  );
};

// Set component property types.
Logo.propTypes = {
  general: PropTypes.object.isRequired,
  getLogo: PropTypes.func.isRequired
};

// Map application state to component state.
const mapStateToProps = state => ({
  general: state.general
});

// Export component.
export default connect(
  mapStateToProps,
  { getLogo }
)(Logo);
