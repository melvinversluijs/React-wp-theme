import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * MenuItem component.
 *
 * @param {Object} props
 */
const MenuItem = ({ menuItem: { ID, title, url, object, children } }) => {
  // Build parent item html.
  const parentHtml =
    object === "custom" ? (
      <a href={url}>{title}</a>
    ) : (
      <Link to={`/${object}/${ID}`}>{title}</Link>
    );

  // If there are no children, just return parent html.
  if (!children) {
    return parentHtml;
  }

  // Else go through children recursively.
  return (
    <Fragment>
      {parentHtml}
      <ul>
        {Object.keys(children).map(key => (
          <MenuItem key={children[key].ID} menuItem={children[key]} />
        ))}
      </ul>
    </Fragment>
  );
};

// Set component property types.
MenuItem.propTypes = {
  menuItem: PropTypes.object.isRequired
};

// Export component.
export default MenuItem;
