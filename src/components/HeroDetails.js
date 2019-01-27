import React from 'react';
import PropTypes from 'prop-types';

function HeroDetails(props) {
  return (
    <div>
      <h1>{props.name} details</h1>
    </div>
  );
}

HeroDetails.PropTypes = {
  name: PropTypes.string
}

export default HeroDetails;
