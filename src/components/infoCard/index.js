import React from 'react';
import PropTypes from 'prop-types';
import { Rating } from 'react-simple-star-rating';

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
 * Render a basic info card
 * 
 * @function
 * @memberof components
 * @param {object} props The component props
 * @param {string} props.address The business address
 * @param {string} props.companyType The type of company selected
 * @param {number} props.cost The cost rating
 * @param {string} props.icon The business icon
 * @param {string} props.open Boolean to handle if the business is open
 * @param {string} props.reference The reference ID for the business. Used for sorting and reduction
 * @param {number} props.review The user review of the card
 * @param {number} props.reviewTotal The amount of reviews in total of the card
 * @param {string} props.title The title of the card
 * @returns {React.Component} Returns the react component
 */
export const InfoCard = ({
    address,
    companyType,
    cost,
    icon,
    open,
    review,
    reviewTotal,
    title,
}) => {
    
    return (
        <li className="info-card">
            <div className="info-card__image-container">
                <img className="info-card__image" src={icon} alt={title} />
            </div>
            <div className="info-card__container">
                <h2 className="info-card__title">{title}</h2>
                <Rating className="info-card__review" readonly initialValue={review} size={15} />
                <span>{`(${reviewTotal})`}</span>
                <span className="info-card__review">{renderCost(cost)}</span>
                {open
                    ? <span className="info-card__review info-card__review--open">Open</span>
                    : <span className="info-card__review info-card__review--closed">Closed</span>}
                <p className="info-card__content">{companyType}</p>
                <p className="info-card__content">{address}</p>
            </div>
        </li>
    );
};

InfoCard.propTypes = {
    address: PropTypes.string,
    companyType: PropTypes.string,
    cost: PropTypes.number,
    icon: PropTypes.string,
    open: PropTypes.bool,
    reference: PropTypes.string,
    review: PropTypes.number,
    reviewTotal: PropTypes.number,
    title: PropTypes.string,
};

InfoCard.defaultProps = {
    address: '',
    companyType: '',
    cost: 0,
    favorite: false,
    icon: './trail.jpg',
    open: false,
    reference: '',
    review: 0,
    reviewTotal: 0,
    title: 'Missing Title',
};

export default InfoCard;
