import React from 'react'
import PropTypes from 'prop-types';
import '../css/Ability.css';

function Ability(props) {

  //props.abilityData.icon = null; see API repo; css placeholder

  return (
    <div className="ability">
      <img src={props.abilityData.icon} alt={props.abilityData.title} />
      <div className="ability-details">
        <p className="ability-title">{props.abilityData.title} ({props.abilityData.hotkey})</p>
        <p>{props.abilityData.mana_cost ? props.abilityData.mana_cost + " mana": "No mana cost"}</p>
        <p>Cooldown: {props.abilityData.cooldown} seconds</p>
        <p>{props.abilityData.description}</p>
      </div>
    </div>
  );

}

Ability.propTypes = {
    abilityData: PropTypes.object.isRequired
}

export default Ability;
