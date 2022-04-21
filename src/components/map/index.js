import React, {
    useEffect,
    isValidElement,
    cloneElement,
} from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';

import constants from '../../constants/global';

import './styles.scss';

/**
 * render a google maps component
 * 
 * @function
 * @memberof components
 * @returns {React.Component} Returns the react component
 */
export const Map = ({ children }) => {
    const ref = React.useRef(null);
    const { map, setMap } = useStore('map');
    const { open } = useStore('sidebar');

    useEffect(() => {
        if (ref.current && !map) {
            const { CENTER, ZOOM } = constants;
            setMap(new window.google.maps.Map(ref.current, {
                center: CENTER,
                zoom: ZOOM,
            }));
        }
    });

    return (
        <>
            <div ref={ref} className={`map ${open ? 'map--open' : ''}`} />
            { children && children.map(child => {
                if (isValidElement) return cloneElement(child, { map }); 
            })}
        </>
    )
};

export default observer(Map);
