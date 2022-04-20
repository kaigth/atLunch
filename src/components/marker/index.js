import React, { useState, useEffect, cloneElement } from 'react';

/**
 * render a standard marker component
 * 
 * @function
 * @memberof components
 * @param {object} options The marker options
 */
export const Marker = (options) => {
    const [ marker, setMarker ] = useState();
    const { map, children } = options;

    useEffect(() => {
        if (!marker) {
            setMarker(new window.google.maps.Marker());
        }

        return () => {
            if (marker) {
                marker.setMap(null);
            }
        };
    }, [marker]);

    useEffect(() => {
        if (marker) {
            marker.setOptions(options);
        }
    }, [marker, options]);

  return (
      <>
        { children.length ? children.map(child => {
            if (isValidElement) return cloneElement(child, { map, marker }); 
        }) : cloneElement(children, { map, marker })}
      </>
  );
};

export default Marker;
