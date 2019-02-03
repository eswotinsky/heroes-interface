import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../css/HeroCard.css';

function HeroCard(props) {

  return (
    <div className="hero-card">
      <p>{props.name}</p>
      <p>{props.role}</p>
      <Link to={`/heroes/${props.name}`}>
        <img src = {props.iconURL} alt = {props.name} />
      </Link>
    </div>
  );

}

HeroCard.propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    iconURL: PropTypes.string
}

export default HeroCard;
