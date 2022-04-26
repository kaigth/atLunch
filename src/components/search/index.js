import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite'
import { useStore } from '../../store'

import Input from '../input';

/**
 * Render the Search component
 * 
 * @function
 * @memberof components
 * @returns {React.Component} Returns the react component
 */
export const Search = () => {
    const [search, setSearch] = useState(null);
    const [ref, setRef] = useState(null);
    const { setPlaces, setActivePlace } = useStore('places');
    const { map } = useStore('map');
    const { openSidebar } = useStore('sidebar');
    const googleEvents = window.google.maps.event;

    const handleBounds = () => {
        map.addListener('bounds_changed', () => {
            search.setBounds(map.getBounds());
            googleEvents.clearListeners(map, 'bounds_changed');
        });
    };

    const parseBounds = (searchPlaces) => {
        const bounds = new window.google.maps.LatLngBounds();
        searchPlaces.forEach((place) => {
            if (!place.geometry || !place.geometry.location) return;

            if (place.geometry.viewport) {
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });

        return bounds;
    };

    const handleSearchCall = () => {
        search.addListener('places_changed', () => {
            const searchPlaces = search.getPlaces();
            if (searchPlaces.length === 0) return;

            const bounds = parseBounds(searchPlaces);
            setActivePlace(null);
            setPlaces(searchPlaces);
            openSidebar();

            map.fitBounds(bounds);
        });
    };

    useEffect(() => {
        if (ref && !search) {
            setSearch(new window.google.maps.places.SearchBox(ref));
        }
    }, [ref, search]);

    useEffect(() => {
        if (search && map) {
            handleBounds();
            handleSearchCall();
        }
    }, [search, map]);

    return <Input inputRef={ref => setRef(ref)} search placeholder="Search" />;
};

export default observer(Search);
