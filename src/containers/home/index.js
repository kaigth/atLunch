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
    const {
        places,
        activePlace,
        favorite,
        setFavorite,
    } = useStore('places');
    const { map, activeMarker  } = useStore('map');

    return (
        <section className="home">
            <Nav />
            <main className="home__container">
                <SideBar />
                <Map>
                    { places && places.map(place => (
                        <Marker
                            key={place.reference}
                            reference={place.reference}
                            position={place.geometry.location}
                        />
                    ))}
                </Map>
                { activePlace &&
                    <InfoWindow map={map} activeMarker={activeMarker}>
                        <Card
                            key={activePlace?.reference}
                            borderless={true}
                            title={activePlace?.name}
                            reviewTotal={activePlace?.user_ratings_total}
                            review={activePlace?.rating}
                            open={() => activePlace?.opening_hours?.isOpen()}
                            cost={activePlace?.price_level}
                            address={activePlace?.formatted_address}
                            companyType={activePlace?.types[0]}
                        />
                    </InfoWindow>
                }
            </main>
        </section>
    )
}

export default observer(Home);
