import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

/**
 * Render a standard Select input
 * 
 * @function
 * @memberof components
 * @param {object} props The component props
 * @param {object|string} props.children The react children of Select
 * @param {Function} props.onChange the onClick event
 * @param {string} props.name The name of the input
 * @param {string} props.type The type of input
 * @param {string} props.value The value of the input
 * @returns {React.Component} Returns the react component
 */
export const Select = ({ children, onChange, name, type, value }) => {
  return (
    <div className="select">
      <input type={type} value={value} name={name} onChange={onChange} />
      <label for={name}>{children}</label>
    </div>
  );
};

Select.propTypes = {
  children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.element,
      PropTypes.string,
  ]),
  name: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string,
};

Select.defaultProps = {
  children: null,
  name: '',
  onChange: () => {},
  type: 'select',
  value: '',
};

export default Select;
