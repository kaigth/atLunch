import React from 'react';
import PropTypes from 'prop-types';
import { Rating } from 'react-simple-star-rating';

import Heart from '../svg/heart';
import { renderCost } from '../../util';

import './styles.scss';

/**
 * Render a basic card
 *
 * @function
 * @memberof components
 * @param {object} props The component props
 * @param {string} props.address The business address
 * @param {string} props.companyType The type of company selected
 * @param {number} props.cost The cost rating
 * @param {string} props.icon The business icon
 * @param {Boolean} props.favorite Displays if the card is favorited
 * @param {Function} props.onClick Function to handle clicking the card.
 * @param {Function} props.mouseEnter Handles a mouse enter action.
 * @param {string} props.open Boolean to handle if the business is open
 * @param {string} props.reference The reference ID for the business. Used for sorting and reduction
 * @param {number} props.review The user review of the card
 * @param {number} props.reviewTotal The amount of reviews in total of the card
 * @param {Function} props.setFavorite Triggers the addition and removal of a favorite card
 * @param {Function} props.selected highlights a selected card
 * @param {string} props.title The title of the card
 * @returns {React.Component} Returns the react component
 */
export const Card = ({
  address,
  companyType,
  cost,
  icon,
  favorite,
  onClick,
  open,
  mouseEnter,
  reference,
  review,
  reviewTotal,
  selected,
  setFavorite,
  title,
}) => (
  <li className={`card ${selected ? 'card--selected' : ''}`} onClick={() => onClick(reference)} onMouseEnter={() => mouseEnter(reference)}>
    <Heart
      styles={{ position: 'absolute', top: '8px', right: '8px', zIndex: 20, fill: favorite ? '#428a13' : '#ffffff' }}
      onClick={evt => {
        evt.stopPropagation();
        setFavorite(reference);
      }}
    />
    <div className="card__image-container">
      <img className="card__image" src={icon} alt={title} />
    </div>
    <div className="card__container">
      <h2 className="card__title">{title}</h2>
      <Rating className="card__review" readonly initialValue={review} size={15} />
      <span>{`(${reviewTotal})`}</span>
      <span className="card__review">{renderCost(cost)}</span>
      {open
        ? <span className="card__review card__review--open">Open</span>
        : <span className="card__review card__review--closed">Closed</span>}
      <p className="card__content">{companyType}</p>
      <p className="card__content">{address}</p>
    </div>
  </li>
);

Card.propTypes = {
  address: PropTypes.string,
  companyType: PropTypes.string,
  cost: PropTypes.number,
  favorite: PropTypes.bool,
  icon: PropTypes.string,
  mouseEnter: PropTypes.func,
  onClick: PropTypes.func,
  open: PropTypes.bool,
  reference: PropTypes.string,
  review: PropTypes.number,
  reviewTotal: PropTypes.number,
  setFavorite: PropTypes.func,
  selected: PropTypes.bool,
  title: PropTypes.string,
};

Card.defaultProps = {
  address: '',
  companyType: '',
  cost: 0,
  favorite: false,
  icon: './trail.jpg',
  mouseEnter: () => {},
  onClick: () => {},
  open: false,
  reference: '',
  review: 0,
  reviewTotal: 0,
  setFavorite: () => {},
  selected: false,
  title: 'Missing Title',
};

export default Card;
