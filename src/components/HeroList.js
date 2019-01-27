import React from 'react';
import Loading from './Loading';
import HeroCard from './HeroCard';
import PropTypes from 'prop-types';
import '../css/HeroList.css';

function HeroList(props) {

  if (props.isLoading) {
    return (
      <div>
        <Loading />
      </div>
    )
  }

  if (props.heroList.length === 0) {
    return (
      <div className="hero-list">
        <h2>No results found. Try refining your search.</h2>
      </div>
    )
  }

  return (
    <div className="hero-list">
      {Object.keys(props.heroList).map(function(heroId) {
        var hero = props.heroList[heroId];
        return <HeroCard
          name = {hero.name}
          role = {hero.role}
          iconURL = {Object.values(hero.icon_url)[0]}
          key = {heroId}
        />
      })}
    </div>
  );

}

HeroList.propTypes = {
  heroList: PropTypes.array,
  isLoading: PropTypes.bool
}

export default HeroList;
