import React, {
  useState,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

/**
 * Render a basic card
 *
 * @function
 * @memberof components
 * @param {object} props The component props
 * @param {string} props.position The position of the marker
 * @param {string} props.map The map reference
 * @param {number} props.reference The places reference for each marker
 * @param {string} props.onClick The onClick handler
 * @param {Boolean} props.onHover The onHover handler
 * @param {Function} props.hovered Check against hover state in the sidebar
 * @param {Function} props.activePlace The current active selected place
 * @returns {React.Component} Returns the react component
 */
export const Marker = ({ position, map, reference, onClick, onHover, hovered, activePlace }) => {
  const [ marker, setMarker ] = useState();
  const gMaps = window.google.maps;

  useEffect(() => {
    if (!marker) {
      setMarker(new gMaps.Marker({ map }));
    }

    return () => {
      if (marker) {
        gMaps.event.clearListeners(['click', 'mouseover', 'mouseout'], marker);
        marker.setMap(null);
      }
    };
  }, [marker]);

  useEffect(() => {
    if (marker) {
      marker.setOptions({ reference });
      marker.setPosition(position);
      marker.setIcon('marker.svg');
      marker.setZIndex(10);

      marker.addListener('mouseover', () => {
        onHover(reference);
        marker.setIcon('marker-brand.svg');
        marker.setZIndex(20);
      });
      marker.addListener('mouseout', () => {
        marker.setIcon('marker.svg');
      });
      marker.addListener('click', () => {
        onClick(marker, reference)
      });
    }
  }, [marker]);

  useEffect(() => {
    if (activePlace && activePlace.reference === reference) {
      onClick(marker, reference);
    }
  }, [activePlace]);

  useEffect(() => {
    if (marker) {
      if (hovered === reference) {
        marker.setIcon('marker-brand.svg');
        marker.setZIndex(20);
      } else {
        marker.setIcon('marker.svg');
      }
    }
  }, [hovered]);

  return null;
};

Marker.propTypes = {
  position: PropTypes.shape({}),
  map: PropTypes.shape({}),
  reference: PropTypes.string,
  onClick: PropTypes.func,
  onHover: PropTypes.func,
  hovered: PropTypes.string,
  activePlace: PropTypes.shape({}),
}

Marker.defaultProps = {
  position: null,
  map: null,
  reference: '',
  onClick: () => {},
  onHover: () => {},
  hovered: '',
  activePlace: null,
}

export default Marker;
