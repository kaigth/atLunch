import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import SearchIcon from '../svg/search';

/**
 * render a standard input component
 *
 * @function
 * @memberof components
 * @param {object} props The component props
 * @param {React.Component} props.inputRef The react input ref context
 * @param {Function} props.onClick Handle the click of a search icon
 * @param {string} props.placeholder The input text placeholder
 * @param {React.Component} props.search Boolean to display if a search icon should exist
 * @returns {React.Component} Returns the react component
 */
export const Input = ({ inputRef, onClick, placeholder, search }) => (
  <>
    <input className="input" ref={inputRef} placeholder={placeholder} />
    {search && <SearchIcon onClick={onClick} styles={{ fill: 'green', width: '16px', height: '16px', position: 'absolute', top: '9px', right: '18px' }} />}
  </>
);

Input.propTypes = {
  inputRef: PropTypes.func,
  onClick: PropTypes.func,
  placeholder: PropTypes.string,
  search: PropTypes.bool,
};

Input.defaultprops = {
  inputRef: () => {},
  onClick: () => {},
  placeholder: 'Search',
  search: false,
};

export default Input;
