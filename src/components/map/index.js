import React, {
    useEffect,
    isValidElement,
    cloneElement,
} from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';

import constants from '../../constants/global';

import './styles.scss';

/**
 * render a google maps component
 * 
 * @function
 * @memberof components
 * @param {object} props The component props
 * @param {object|string} props.children The react children of Map
 * @returns {React.Component} Returns the react component
 */
export const Map = ({ children }) => {
    const ref = React.useRef(null);
    const { map, setMap } = useStore('map');
    const { open } = useStore('sidebar');

    const handleNavigatorLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
        
                    map.setCenter(pos);
                },
            () => {
                throw new Error('Geolocation refused.');
            }
            );
        } else {
            throw new Error('Geolocation not supported.');
        }
    }

    useEffect(() => {
        if (ref.current && !map) {
            const { CENTER, ZOOM } = constants;
            setMap(new window.google.maps.Map(ref.current, {
                center: CENTER,
                zoom: ZOOM,
            }));
        }
    });

    useEffect(() => {
        if (map) handleNavigatorLocation();
    }, [map]);

    return (
        <>
            <div ref={ref} className={`map ${open ? 'map--open' : ''}`} />
            { children && children.map(child => {
                if (isValidElement) return cloneElement(child, { map }); 
            })}
        </>
    )
};

Map.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.element,
        PropTypes.string,
    ]),
};

Map.defaultProps = {
    children: null,
};

export default observer(Map);
