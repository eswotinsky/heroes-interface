import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Warrior from '../img/warrior.png';
import Assassin from '../img/assassin.png';
import Support from '../img/support.png';
import Specialist from '../img/specialist.png';
import Multiclass from '../img/multiclass.png';
import '../css/HeroCard.css';

function HeroCard(props) {
  //TODO: mouseover visual effects

  const roleIcons = {
    "Warrior": Warrior,
    "Assassin": Assassin,
    "Support": Support,
    "Specialist": Specialist,
    "Multiclass": Multiclass
  }

  function handleHeroSelection() {
    props.onHeroSelection(props.name);
  }

  return (
    <div>
      <Link to={`/heroes/${props.name}`} onClick={handleHeroSelection}>
        <div className="hero-card-round" style={{backgroundImage: `url(${props.iconURL})`}}>
            <img src={roleIcons[props.role]} className="role-icon" alt={props.name} />
        </div>
      </Link>
      <h4>{props.name}</h4>
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
