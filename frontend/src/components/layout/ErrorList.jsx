import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**
 * ErrorList component.
 *
 * @param {object} props
 */
const ErrorList = ({ errors }) => {
  // Check if there are any errors.
  const hasErrors =
    errors && Object.values(errors).find(error => error !== null);

  if (!hasErrors) {
    return null;
  }

  // Define an index to use in the map function as key.
  let idx = 0;

  return (
    <div className="errors">
      <ul className="errors__list">
        {Object.values(errors).map(error => {
          if (error === null) {
            return null;
          }

          // Use an index to get a unique key.
          idx += 1;
          return (
            <li className="errors__list-item" key={idx}>
              {error.message}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// Set component property types.
ErrorList.propTypes = {
  errors: PropTypes.object,
};

ErrorList.defaultProps = {
  errors: {},
};

// Map application state to component properties.
const mapStateToProps = state => ({
  errors: state.errors,
});

// Export component.
export default connect(
  mapStateToProps,
  {},
)(ErrorList);
