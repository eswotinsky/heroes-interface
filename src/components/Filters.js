import React from 'react';
import PropTypes from 'prop-types';
import Warrior from '../img/warrior.png';
import Assassin from '../img/assassin.png';
import Support from '../img/support.png';
import Specialist from '../img/specialist.png';
import '../css/Filters.css';

function Filters(props) {

  function handleFilterChange(event) {
    event.preventDefault();
    props.onFilterChange(event.currentTarget.alt);
  }

  return (
    <div>
      <div className="role-icons">
        <img src={Warrior} onClick={handleFilterChange} alt="Warrior" className={props.selectedRoles.includes("Warrior") ? 'selected' : ''} />
        <img src={Assassin} onClick={handleFilterChange} alt="Assassin" className={props.selectedRoles.includes("Assassin") ? 'selected' : ''} />
        <img src={Support} onClick={handleFilterChange} alt="Support" className={props.selectedRoles.includes("Support") ? 'selected' : ''} />
        <img src={Specialist} onClick={handleFilterChange} alt="Specialist" className={props.selectedRoles.includes("Specialist") ? 'selected' : ''} />
      </div>
    </div>
  );
}

Filters.propTypes = {
  onFilterChange: PropTypes.func
};

export default Filters;
