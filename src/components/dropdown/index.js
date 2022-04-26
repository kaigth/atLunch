import React from 'react';
import PropTypes from 'prop-types';

import Button from '../button';

import './styles.scss';

/**
 * Render a basic DropDown
 * 
 * @function
 * @memberof components
 * @param {object} props The component props
 * @param {object|string} props.children The children of the DropDown
 * @param {Boolean} props.isOpen Handle the open state of the Dropdown
 * @param {Function} props.onClick Handle the click of the DropDown
 * @returns {React.Component} Returns the react component
 */
export const DropDown = ({ children, isOpen, onClick }) => {
    return (
        <>
            <div onClick={onClick} className={`dropdown__splash ${isOpen ? 'dropdown__splash--open' : ''}`} />
            <div className={`dropdown ${isOpen ? 'dropdown--open' : ''}`}>
                <div className="dropdown__content">
                    {children}
                </div>
                <div className="dropdown__footer">
                    <Button borderless onClick={onClick}>Apply</Button>
                </div>
            </div>
        </>
    );
};

DropDown.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string,
        PropTypes.element,
    ]),
    isOpen: PropTypes.bool,
    onClick: PropTypes.func,
};

DropDown.defaultProps = {
    children: null,
    isOpen: false,
    onClick: () => {},
};

export default DropDown;
