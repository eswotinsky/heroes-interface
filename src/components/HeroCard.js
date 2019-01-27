import React from 'react'
import PropTypes from 'prop-types';
import '../css/HeroCard.css';

function HeroCard(props) {

  return (
    <div className="hero-card">
      <p>{props.name}</p>
      <p>{props.role}</p>
      <img src = {props.iconURL} />
    </div>
  );

}

HeroCard.propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    iconURL: PropTypes.string
}

export default HeroCard;
