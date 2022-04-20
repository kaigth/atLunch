import React, { useState, useEffect } from 'react';
import ReactDOMServer from 'react-dom/server'

/**
 * render a standard marker component
 * 
 * @function
 * @memberof components
 * @param {object} options The marker options
 */
export const InfoWindow = (options) => {
    const [ infoWindow, setInfoWindow ] = useState();
    const { map, marker, visible, children } = options;

    const updateContent = () => {
        const content = renderChildren();
        infoWindow.setContent(content);
    }

    const renderChildren = () => {
        return ReactDOMServer.renderToString(children);
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

            marker.addListener('click', () => {
                infoWindow.open(map, marker);
            });
        }
    }, [infoWindow, options]);

    useEffect(() => {
        if (infoWindow && visible) {
            infoWindow.open(map, marker);
            infoWindow.focus();
        }
    }, [infoWindow, visible]);

  return null;
};

export default InfoWindow;
