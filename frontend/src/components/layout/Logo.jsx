import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getLogoAction } from '../../actions/general';

/**
 * Logo component.
 *
 * @param {Object} param0
 */
const Logo = ({ logo, getLogo }) => {
  // Call getLogo when component is loaded.
  useEffect(() => {
    getLogo();
  }, [getLogo]);

  return (
    <div className="header__logo">
      <Link className="header__logo-link" to="/">
        {logo ? (
          <img
            className="header__logo-img"
            src={logo.src}
            alt={logo.alt ? logo.alt : WP_React.title}
          />
        ) : (
          <h2 className="header__logo-text">{WP_React.title}</h2>
        )}
      </Link>
    </div>
  );
};

// Set component property types.
Logo.propTypes = {
  logo: PropTypes.object,
  getLogo: PropTypes.func.isRequired,
};

Logo.defaultProps = {
  logo: null,
};

// Map application state to component state.
const mapStateToProps = state => ({
  logo: state.general.logo,
});

// Export component.
export default connect(
  mapStateToProps,
  { getLogo: getLogoAction },
)(Logo);
