import React from 'react';
import PropTypes from 'prop-types';
import Ability from './Ability';
import '../css/HeroDetails.css';

function HeroDetails(props) {

  window.scrollTo(0,0);

  const primaryHotkeys = ["Q", "W", "E"];
  const bonusHotkeys = ["1", "2", "3", "4", "5", "6"];

  return (
    <div className="hero-details">
      <img
        className="hero-image"
        src={Object.values(props.selectedHeroData.icon_url)[0]}
        alt={props.selectedHeroData.name}
      />
      <h1>{props.selectedHeroData.name}</h1>
      <h2>{props.selectedHeroData.type} {props.selectedHeroData.role}</h2>

      <h3>Trait</h3>
      {props.selectedHeroData.abilities.filter(ability => ability.trait === true).map((traitAbility, name) =>
        <Ability
          abilityData={traitAbility}
          key={name}
        />
      )}

      <h3>Primary Abilities</h3>
      {props.selectedHeroData.abilities.filter(ability => primaryHotkeys.includes(ability.hotkey)).map((primaryAbility, name) =>
        <Ability
          abilityData={primaryAbility}
          key={name}
        />
      )}

      <h3>Heroic Abilities</h3>
      {props.selectedHeroData.abilities.filter(ability => ability.hotkey === "R").map((heroicAbility, name) =>
        <Ability
          abilityData={heroicAbility}
          key={name}
        />
      )}

      {props.selectedHeroData.abilities.some(ability => ability.hotkey === "1") &&
        <h3>Bonus Abilities</h3>
      }
      {props.selectedHeroData.abilities.filter(ability => bonusHotkeys.includes(ability.hotkey)).map((bonusAbility, name) =>
        <Ability
          abilityData={bonusAbility}
          key={name}
        />
      )}

    </div>
  );
}

HeroDetails.propTypes = {
  selectedHeroData: PropTypes.object.isRequired
}

export default HeroDetails;
