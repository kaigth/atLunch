import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';

import Nav from '../../components/nav';
import Map from '../../components/map';
import SideBar from '../../components/sidebar';
import Marker from '../../components/marker';
import InfoWindow from '../../components/infowindow';
import Button from '../../components/button';
import List from '../../components/svg/list';
import Pin from '../../components/svg/pin';

import './styles.scss';
import InfoCard from '../../components/infoCard';

/**
 * Render the home route
 *
 * @function
 * @memberof containers
 * @param {object} props The component props
 * @returns {string} The rendered component
 */
export const Home = () => {
  const { places, activePlace, setActivePlace, hovered, setHovered } = useStore('places');
  const { map, activeMarker, setActiveMarker } = useStore('map');
  const { toggleOpen, open } = useStore('sidebar');

  return (
    <section className="home">
      <Nav />
      <div className="home__mobile-button">
          <Button onClick={toggleOpen} icon={open ? <Pin /> : <List />}>{open ? 'Map' : 'List'}</Button>
      </div>
      <main className="home__container">
        <SideBar />
        { activePlace && activeMarker &&
          <InfoWindow map={map} activeMarker={activeMarker}>
            <InfoCard
              key={activePlace?.reference}
              title={activePlace?.name}
              reviewTotal={activePlace?.user_ratings_total}
              review={activePlace?.rating}
              open={activePlace?.opening_hours?.open_now}
              cost={activePlace?.price_level}
              address={activePlace?.formatted_address}
              companyType={activePlace?.types[0]}
            />
          </InfoWindow>
        }
        <Map>
          { places && places.map(place => (
            <Marker
              key={place.reference}
              reference={place.reference}
              activePlace={activePlace}
              hovered={hovered}
              onClick={(marker, ref) => {
                setActivePlace(ref);
                setActiveMarker(marker);
              }}
              onHover={ref => setHovered(ref)}
              position={place.geometry.location}
            />
          ))}
        </Map>
      </main>
    </section>
  )
}

export default observer(Home);
