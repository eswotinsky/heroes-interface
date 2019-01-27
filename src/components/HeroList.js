import React from 'react';
import Loading from './Loading';
import HeroCard from './HeroCard';
import PropTypes from 'prop-types';

function HeroList(props) {

  if (props.isLoading) {
    return (
      <div>
        <Loading />
      </div>
    )
  }

  return (
    <div>
      {Object.keys(props.heroList).map(function(heroId) {
        var hero = props.heroList[heroId];
        return <HeroCard
          name = {hero.name}
          role = {hero.role}
          iconURL = {hero.icon_url}
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
