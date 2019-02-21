import React from 'react'
import PropTypes from 'prop-types';
import '../css/Ability.css';

function Ability(props) {

  //props.abilityData.icon = null; see API repo; css placeholder

  return (
    <div className="ability">

      <div className="ability-icon">
        <img src={props.abilityData.icon} alt={props.abilityData.title} />
      </div>

      <div className="ability-details-container">

        <div className="ability-title">
          {props.abilityData.title}
          {props.abilityData.hotkey === null
            ? null
            : <div className="ability-hotkey"> ({props.abilityData.hotkey})</div>
          }
        </div>

        <div className="ability-cost-cooldown">

          {props.abilityData.hotkey === "D" || props.abilityData.hotkey === null
            ? null
            : <span className="ability-cost">{props.abilityData.mana_cost ? props.abilityData.mana_cost + " mana": "No mana cost"}</span>
          }

          {props.abilityData.cooldown === null
            ? null
            : <span>Cooldown: {props.abilityData.cooldown} seconds</span>
          }

        </div>

        <p className="ability-description">
          {props.abilityData.description}
        </p>

      </div>
    </div>
  );

}

Ability.propTypes = {
    abilityData: PropTypes.object.isRequired
}

export default Ability;
