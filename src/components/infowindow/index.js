import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactDOMServer from 'react-dom/server';

/**
 * render a standard InfoWindow component
 * 
 * @function
 * @memberof components
 * @param {object} props The component props
 * @param {object|string} props.children The children of the DropDown
 * @param {object} props.map The map reference
 * @param {object} props.activeMarker The selected marker
 * @returns {React.Component} Returns the react component
 */
export const InfoWindow = ({ children, map, activeMarker }) => {
    const [ infoWindow, setInfoWindow ] = useState();

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
                map,
            }));
        }

        return () => {
            if (infoWindow) {
                setInfoWindow(null);
            }
        };
    }, [infoWindow]);

    useEffect(() => {
        if (infoWindow && children) updateContent();

        if (infoWindow) {
            handleOpen();
        }
    }, [infoWindow, children]);

  return null;
};

InfoWindow.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.element,
        PropTypes.string,
    ]),
    map: PropTypes.shape({}),
    activeMarker: PropTypes.shape({}),
};

InfoWindow.defaultProps = {
    children: null,
    map: null,
    activeMarker: null,
};

export default InfoWindow;
