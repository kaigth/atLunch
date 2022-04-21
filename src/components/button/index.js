import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

/**
 * Render a standard button
 * 
 * @function
 * @memberof components
 * @param {object} props The component props
 * @param {object|string} props.children The react children of button
 * @param {Boolean} props.disabled Disables the button if true
 * @param {Function} props.onClick the onClick event
 * @returns {React.Component} Returns the react component
 */
export const Button = ({ children, disabled, onClick }) => {
    return (
        <button className="button" disabled={disabled} onClick={onClick}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.element,
        PropTypes.string,
    ]),
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    children: null,
    disabled: false,
    onClick: () => {},
};

export default Button;
