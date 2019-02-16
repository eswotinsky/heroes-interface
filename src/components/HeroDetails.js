import React from 'react';
import PropTypes from 'prop-types';
import Ability from './Ability';

function HeroDetails(props) {

  const primaryHotkeys = ["Q", "W", "E"];
  const bonusHotkeys = ["1", "2", "3", "4", "5", "6"];

  return (
    <div className="hero-details">
      <h1>{props.selectedHeroData.name} details</h1>
      <h2>Role: {props.selectedHeroData.role}</h2>

      <h3>Primary Abilities</h3>
      {props.selectedHeroData.abilities.filter(ability => primaryHotkeys.includes(ability.hotkey)).map((primaryAbility, index) =>
        <Ability
          abilityData={primaryAbility}
          key={index}
        />
      )}

      <h3>Heroic Abilities</h3>
      {props.selectedHeroData.abilities.filter(ability => ability.hotkey === "R").map((heroicAbility, index) =>
        <Ability
          abilityData={heroicAbility}
          key={index}
        />
      )}

      {props.selectedHeroData.abilities.some(ability => ability.hotkey === "1") &&
        <h3>Bonus Abilities</h3>
      }
      {props.selectedHeroData.abilities.filter(ability => bonusHotkeys.includes(ability.hotkey)).map((bonusAbility, index) =>
        <Ability
          abilityData={bonusAbility}
          key={index}
        />
      )}

    </div>
  );
}

HeroDetails.propTypes = {
  selectedHeroData: PropTypes.object.isRequired
}

export default HeroDetails;
