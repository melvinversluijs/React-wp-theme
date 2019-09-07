/* eslint camelcase: 0 */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * MenuItem component.
 *
 * @param {Object} props
 */
const MenuItem = ({
  menuItem: { object_id, title, url, object, children },
  level,
}) => {
  // Keep isActive in state.
  const [isActive, setIsActive] = useState(false);

  /**
   * Toggle the isActive state for menu items with children, used on mobile view.
   */
  const toggleIsActive = () => {
    setIsActive(!isActive);
  };

  // If no level was given, use 1.
  const menuLevel = level ? level + 1 : 1;

  // Build parent item html.
  const parentHtml =
    object === 'custom' ? (
      <a href={url} className="header__nav-link">
        {title}
      </a>
    ) : (
      <Link className="header__nav-link" to={`/${object}/${object_id}`}>
        {title}
      </Link>
    );

  // If there are no children, just return parent html.
  if (!children) {
    return (
      <li className="header__nav-item header__nav-item--no-children">
        {parentHtml}
      </li>
    );
  }

  // Else go through children recursively.
  return (
    <li
      className={`header__nav-item header__nav-item--with-children ${isActive &&
        'header__nav-item--active'}`}
    >
      {parentHtml}
      <button
        className="header__nav-link-toggle"
        onClick={toggleIsActive}
        type="button"
      >
        <i />
      </button>
      <ul className={`header__nav-list header__nav-list--level-${menuLevel}`}>
        {Object.keys(children).map(key => (
          <MenuItem
            key={children[key].ID}
            menuItem={children[key]}
            level={menuLevel}
          />
        ))}
      </ul>
    </li>
  );
};

// Set component property types.
MenuItem.propTypes = {
  menuItem: PropTypes.object.isRequired,
  level: PropTypes.number,
};

MenuItem.defaultProps = {
  level: null,
};

// Export component.
export default MenuItem;
