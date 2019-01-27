import React from 'react'
import PropTypes from 'prop-types';

function HeroCard(props) {

  return (
    <div>
      <p>{props.name}</p>
      <p>{props.role}</p>
    </div>
  );

}

HeroCard.propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    iconURL: PropTypes.object
}

export default HeroCard;
