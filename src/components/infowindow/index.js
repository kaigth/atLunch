import React, { useState, useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';
import { observer } from 'mobx-react-lite';

/**
 * render a standard marker component
 * 
 * @function
 * @memberof components
 * @param {object} options The marker options
 */
export const InfoWindow = (options) => {
    const [ infoWindow, setInfoWindow ] = useState();
    const { children, map, activeMarker } = options;

    const updateContent = () => {
        const content = renderChildren();
        infoWindow.setContent(content);
    }

    const renderChildren = () => {
        return ReactDOMServer.renderToString(children);
    }

    const handleOpen = () => {
        infoWindow.open(map, activeMarker);
        map.panTo(activeMarker.getPosition());
    }

    useEffect(() => {
        if (!infoWindow) {
            setInfoWindow(new google.maps.InfoWindow({
                content: '',
                ...options
            }));
        }
    }, [infoWindow]);

    useEffect(() => {
        if (infoWindow && children) updateContent();

        if (infoWindow) {
            infoWindow.setOptions(options);
            handleOpen();
        }
    }, [infoWindow, options]);

  return null;
};

export default InfoWindow;
