import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

/**
 * render a standard input component
 * 
 * @function
 * @memberof components
 * @param {object} props The component props
 * @param {React.Component} props.inputRef The react input ref context
 * @param {string} props.placeholder The input text placeholder
 * @returns {React.Component} Returns the react component
 */
export const Input = ({ inputRef, placeholder }) => {
    return (
        <input className="input" ref={inputRef} placeholder={placeholder} />
    );
};

Input.propTypes = {
    inputRef: PropTypes.func,
    placeholder: PropTypes.string,
};

Input.defaultprops = {
    inputRef: () => {},
    placeholder: 'Search',
};

export default Input;
