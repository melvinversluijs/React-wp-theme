import React from "react";
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
    return <li className="no-children">{parentHtml}</li>;
  }

  // Else go through children recursively.
  return (
    <li className="with-children">
      {parentHtml}
      <ul>
        {Object.keys(children).map(key => (
          <MenuItem key={children[key].ID} menuItem={children[key]} />
        ))}
      </ul>
    </li>
  );
};

// Set component property types.
MenuItem.propTypes = {
  menuItem: PropTypes.object.isRequired
};

// Export component.
export default MenuItem;
