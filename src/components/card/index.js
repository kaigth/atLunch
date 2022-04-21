import React from 'react';
import PropTypes from 'prop-types';
import StarsRating from 'stars-rating';

import './styles.scss';

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
 * @param {string} props.borderless Card displayed as a borderless infoWindow
 * @param {string} props.title The title of the card
 * @param {number} props.review The user review of the card
 * @param {number} props.reviewTotal The amount of reviews in total of the card
 * @param {number} props.cost The cost rating
 * @param {string} props.companyType The type of company selected
 * @param {string} props.open Boolean to handle if the business is open
 * @param {string} props.address The business address
 * @returns {React.Component} Returns the react component
 */
export const Card = ({
    borderless,
    reference,
    title,
    icon,
    review,
    reviewTotal,
    cost,
    companyType,
    open,
    address,
    onClick,
    favorite,
    setFavorite,
}) => {
    return (
        <li className={`card ${borderless ? 'card--borderless' : ''}`} onClick={() => onClick(reference)}>
            <div 
                className={`card__heart ${favorite ? 'card__heart--favorite' : ''}`}
                onClick={evt => {
                    evt.stopPropagation()
                    setFavorite(reference)
                }}
            />
            <div className="card__image-container">
                <img className="card__image" src={icon} alt={title} />
            </div>
            <div className="card__container">
                <p className="card__title">{title}</p>
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
    borderless: PropTypes.bool,
    reference: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.string,
    review: PropTypes.number,
    reviewTotal: PropTypes.number,
    cost: PropTypes.number,
    companyType: PropTypes.string,
    open: PropTypes.func,
    setFavorite: PropTypes.func,
    favorite: PropTypes.bool,
    address: PropTypes.string,
};

Card.defaultProps = {
    borderless: false,
    reference: '',
    title: 'Missing Title',
    icon: './trail.jpg',
    review: 0,
    reviewTotal: 0,
    cost: 0,
    companyType: '',
    open: () => {},
    setFavorite: () => {},
    favorite: false,
    address: '',
};

export default Card;
