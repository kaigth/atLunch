import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

/**
 * Render a standard button
 *
 * @function
 * @memberof components
 * @param {object} props The component props
 * @param {Boolean} props.borderless A borderless button
 * @param {object|string} props.children The react children of button
 * @param {Boolean} props.disabled Disables the button if true
 * @param {Boolean} props.icon If an Icon exists
 * @param {Function} props.onClick the onClick event
 * @returns {React.Component} Returns the react component
 */
export const Button = ({ borderless, children, disabled, icon, onClick }) => (
  <button className={`button ${borderless ? 'button--borderless' : ''}`} disabled={disabled} onClick={onClick}>
    {icon && icon}
    {children}
  </button>
);

Button.propTypes = {
  borderless: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string,
  ]),
  disabled: PropTypes.bool,
  icon: PropTypes.element,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  borderless: false,
  children: null,
  disabled: false,
  icon: null,
  onClick: () => {},
};

export default Button;
