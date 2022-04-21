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
 * @param {Boolean} props.isOpen Handle the open state of the Dropdown
 * @param {Function} props.onClick Handle the click of the DropDown
 * @param {object|string} props.children The children of the DropDown
 * @returns {React.Component} Returns the react component
 */
export const DropDown = ({ isOpen, onClick, children }) => {
    return (
      <>
          {isOpen && (
            <div className="dropdown">
              <div className="dropdown__content">
                {children}
              </div>
              <div className="dropdown__footer">
                <Button borderless onClick={onClick}>Save</Button>
              </div>
            </div>
          )}
      </>
    );
};

DropDown.propTypes = {
    isOpen: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string,
        PropTypes.element,
    ]),
};

DropDown.defaultProps = {
    isOpen: false,
    onClick: () => {},
    children: null,
};

export default DropDown;
