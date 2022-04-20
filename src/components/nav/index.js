import React from 'react';

import Button from '../button';
import Search from '../search';

import './styles.scss';

/**
 * Render the site navigation
 * 
 * @function
 * @memberof components
 * @param {object} props The component props
 * @returns {React.Component} Returns the react component
 */
export const Nav = () => {
    return (
        <nav className="navigation">
            <div className="navigation__logo">
                <img src="logo.png" alt="AllTrails" />
                <h1 className='navigation__text'>AT LUNCH</h1>
            </div>
            <div className="navigation__content">
                <Button>filter</Button>
                <Search />
            </div>
        </nav>
    );
};

export default Nav;
