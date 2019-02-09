import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Warrior from '../img/warrior.png';
import Assassin from '../img/assassin.png';
import Support from '../img/support.png';
import Specialist from '../img/specialist.png';
import '../css/HeroCard.css';

function HeroCard(props) {

  const roleIcons = {
    "Warrior": Warrior,
    "Assassin": Assassin,
    "Support": Support,
    "Specialist": Specialist
  }

  function handleHeroSelection() {
    props.onHeroSelection(props.name);
  }

  return (
    <div className="hero-card" style={{backgroundImage: `url(${props.iconURL})`}}>
      <Link to={`/heroes/${props.name}`} onClick={handleHeroSelection}>
        <img src={roleIcons[props.role]} className="role-icon" alt={props.name} />
        <div className="title-plate">
          <h4>{props.name}</h4>
        </div>
      </Link>
    </div>
  );

}

HeroCard.propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    iconURL: PropTypes.string,
    onHeroSelection: PropTypes.func.isRequired
}

export default HeroCard;
