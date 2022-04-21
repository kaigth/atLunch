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
 * @param {Function} props.onClick the onClick event
 * @param {Boolean} props.borderless Display a borderless button
 * @returns {React.Component} Returns the react component
 */
export const Button = ({ onClick, children, borderless }) => {
    return (
        <button className={`button ${borderless ? 'button--borderless' : ''}`} onClick={onClick}>
            {children}
        </button>
    );
};

Button.propTypes = {
    borderless: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.element,
        PropTypes.string,
    ]),
    onClick: PropTypes.func,
};

Button.defaultProps = {
    borderless: false,
    children: null,
    onClick: () => {},
};

export default Button;
