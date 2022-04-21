import React, { useState } from 'react';

import Button from '../button';
import DropDown from '../dropdown';
import Search from '../search';
import Select from '../select';

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
    const [ isOpen, setIsOpen ] = useState(false);
    const toggle = () => {
        if (isOpen) return;
        setIsOpen(!isOpen);
    }

    return (
        <nav className="navigation">
            <div className="navigation__logo">
                <img src="logo.png" alt="AllTrails" />
                <h1 className='navigation__text'>AT LUNCH</h1>
            </div>
            <div className="navigation__content">
                <Button onClick={() => toggle()}>
                    filter
                    <DropDown isOpen={isOpen}>
                        <form>
                            <Select type="radio" name="rating" value="ratingHigh">Ratings High to Low</Select>
                            <Select type="radio" name="rating" value="ratingLow">Ratings Low to High</Select>
                        </form>
                    </DropDown>
                </Button>
                <Search />
            </div>
        </nav>
    );
};

export default Nav;
