import React from 'react';
import PropTypes from 'prop-types';
import HeroList from './HeroList';
import Filters from './Filters';

function Home(props) {
  return (
    <div>
      <Filters
        selectedRoles={props.selectedRoles}
        onFilterChange={props.onFilterChange}
      />
      <HeroList
        heroList={props.heroList}
        isLoading={props.isLoading}
      />
    </div>
  );

}

Home.propTypes = {
  heroList: PropTypes.array.isRequired,
  selectedRoles: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onFilterChange: PropTypes.func.isRequired
}

export default Home;
