import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';

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
  const [ sortedBy, setSortedBy ] = useState({});
  const { sortBy, places } = useStore('places');
  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="navigation">
      <div className="navigation__logo">
        <img src="logo.png" alt="AllTrails" />
      </div>
      <div className="navigation__content">
        <div className="navigation__content-filter">
          <Button onClick={() => toggle()}>filter</Button>
        </div>
        <DropDown isOpen={isOpen} onClick={() => {
          sortBy(sortedBy.direction, sortedBy.by);
          toggle();
        }}>
          <form>
            <Select
              type="radio"
              onChange={() => setSortedBy({ direction: 'asc', by: 'rating' })}
              name="rating"
              disabled={places.length <= 0}
              value="ratingHigh"
            >
              Ratings High to Low
            </Select>
            <Select
              type="radio"
              onChange={() => setSortedBy({ direction: 'desc', by: 'rating' })}
              name="rating"
              disabled={places.length <= 0}
              value="ratingLow"
            >
              Ratings Low to High
            </Select>
          </form>
        </DropDown>
        <div className="navigation__content-search">
          <Search />
        </div>
      </div>
    </nav>
  );
};

export default observer(Nav);
