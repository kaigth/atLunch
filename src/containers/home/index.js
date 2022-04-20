import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';

import Nav from '../../components/nav';
import Map from '../../components/map';
import SideBar from '../../components/sidebar';
import Marker from '../../components/marker';
import InfoWindow from '../../components/infowindow';
import Card from '../../components/card';

import './styles.scss';

/**
 * Render the home route
 * 
 * @function
 * @memberof containers
 * @param {object} props The component props
 * @returns {string} The rendered component
 */
export const Home = () => {
    const { places } = useStore('places');
    const { activePlace } = useStore('sidebar');

    return (
        <section className="home">
            <Nav />
            <main className="home__container">
                <SideBar />
                <Map>
                    { places && places.map(place => (
                        <Marker key={place.reference} position={place.geometry.location}>
                            <InfoWindow visible={place.reference === activePlace}>
                                <Card
                                    key={place.reference}
                                    borderless={true}
                                    title={place.name}
                                    reviewTotal={place.user_ratings_total}
                                    review={place.rating}
                                    open={() => place.opening_hours?.isOpen()}
                                    cost={place.price_level}
                                    address={place.formatted_address}
                                    companyType={place.types[0]}
                                />
                            </InfoWindow>
                        </Marker>
                    ))}
                </Map>
            </main>
        </section>
    )
}

export default observer(Home);
