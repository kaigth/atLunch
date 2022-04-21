import React, {
    useState,
    useEffect,
} from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';


/**
 * render a standard marker component
 * 
 * @function
 * @memberof components
 * @param {object} options The marker options
 */
export const Marker = (options) => {
    const [ marker, setMarker ] = useState();
    const { setActiveMarker } = useStore('map');
    const { activePlace, setActivePlace } = useStore('places');
    const { reference } = options;
    const gMaps = window.google.maps;

    const handleActiveEvent = () => {
        setActiveMarker(marker);
        setActivePlace(reference);
    }

    useEffect(() => {
        if (!marker) {
            setMarker(new gMaps.Marker());
        }

        return () => {
            if (marker) {
                gMaps.event.clearListeners('click', marker);
                marker.setMap(null);
            }
        };
    }, [marker]);

    useEffect(() => {
        if (marker) {
            marker.setOptions(options);

            if (activePlace && (reference === activePlace.reference)) {
                setActiveMarker(marker);
            }
            
            marker.addListener('click', handleActiveEvent);
        }
    }, [marker, options, setActiveMarker, activePlace]);

  return null;
};

export default observer(Marker);
