import React from 'react';
import PropTypes from 'prop-types';
import StarsRating from 'stars-rating';

import './styles.scss';

/**
 * Render cost symbol based on google price rating
 * 
 * @function
 * @memberof components
 * @param {object} cost The google cost rating
 * @returns {string} The symbol based on the google cost rating
 */
const renderCost = (cost) => {
    if (cost === 2) return '$$';
    if (cost === 3) return '$$$';

    return '$';
}

/**
 * Render a basic card
 * 
 * @function
 * @memberof components
 * @param {object} props The component props
 * @param {string} props.address The business address
 * @param {string} props.borderless Card displayed as a borderless infoWindow
 * @param {string} props.companyType The type of company selected
 * @param {number} props.cost The cost rating
 * @param {string} props.icon The business icon
 * @param {Boolean} props.favorite Displays if the card is favorited
 * @param {Function} props.onClick Function to handle clicking the card.
 * @param {string} props.open Boolean to handle if the business is open
 * @param {string} props.reference The reference ID for the business. Used for sorting and reduction
 * @param {number} props.review The user review of the card
 * @param {number} props.reviewTotal The amount of reviews in total of the card
 * @param {Function} props.setFavorite Triggers the addition and removal of a favorite card
 * @param {string} props.title The title of the card
 * @returns {React.Component} Returns the react component
 */
export const Card = ({
    address,
    borderless,
    companyType,
    cost,
    icon,
    favorite,
    onClick,
    open,
    reference,
    review,
    reviewTotal,
    setFavorite,
    title,
}) => {
    return (
        <li className={`card ${borderless ? 'card--borderless' : ''}`} onClick={() => onClick(reference)}>
            <div 
                className={`card__heart ${favorite ? 'card__heart--favorite' : ''}`}
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
                <StarsRating className="card__review" edit={false} count={5} value={review} size={15} color2={'#ffd700'} />
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
};

Card.propTypes = {
    address: PropTypes.string,
    borderless: PropTypes.bool,
    companyType: PropTypes.string,
    cost: PropTypes.number,
    favorite: PropTypes.bool,
    icon: PropTypes.string,
    open: PropTypes.bool,
    reference: PropTypes.string,
    review: PropTypes.number,
    reviewTotal: PropTypes.number,
    setFavorite: PropTypes.func,
    title: PropTypes.string,
};

Card.defaultProps = {
    address: '',
    borderless: false,
    companyType: '',
    cost: 0,
    favorite: false,
    icon: './trail.jpg',
    open: false,
    reference: '',
    review: 0,
    reviewTotal: 0,
    setFavorite: () => {},
    title: 'Missing Title',
};

export default Card;
