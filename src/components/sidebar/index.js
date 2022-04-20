import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';

import Card from '../card';

import './styles.scss';

/**
 * Render the sidebar
 * 
 * @function
 * @memberof components
 * @param {object} props The component props
 * @returns {React.Component} Returns the react component
 */
export const SideBar = () => {
    const { places } = useStore('places');
    const { open, setActivePlace } = useStore('sidebar');
    return (
        <section className={`sidebar ${open ? 'sidebar--open' : ''}`}>
            <div className="sidebar__container">
                <ul className="sidebar__content">
                    { places && places.length ? places.map(place => (
                        <Card
                            key={place.reference}
                            reference={place.reference}
                            onClick={ref => setActivePlace(ref)}
                            title={place.name}
                            reviewTotal={place.user_ratings_total}
                            review={place.rating}
                            open={() => place.opening_hours?.isOpen()}
                            cost={place.price_level}
                            address={place.formatted_address}
                            companyType={place.types[0]}
                        />
                    )) : <div>No Items</div> }
                </ul>
            </div>
        </section>
    );
};

export default observer(SideBar);
