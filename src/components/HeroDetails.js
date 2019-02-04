import React from 'react';
import PropTypes from 'prop-types';

function HeroDetails(props) {
  return (
    <div>
      <h1>{props.selectedHeroData.name} details</h1>
      <h3>Role: {props.selectedHeroData.role}</h3>
    </div>
  );
}

HeroDetails.propTypes = {
  selectedHeroData: PropTypes.object.isRequired
}

export default HeroDetails;
