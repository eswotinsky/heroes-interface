import React from 'react';
import PropTypes from 'prop-types';
import Warrior from '../img/warrior.png';
import Assassin from '../img/assassin.png';
import Support from '../img/support.png';
import Specialist from '../img/specialist.png';
import Multiclass from '../img/multiclass.png';
import '../css/Filters.css';

function Filters(props) {

  const roleIcons = {
    "Warrior": Warrior,
    "Assassin": Assassin,
    "Support": Support,
    "Specialist": Specialist,
    "Multiclass": Multiclass
  }

  function handleFilterChange(event) {
    event.preventDefault();
    props.onFilterChange(event.currentTarget.alt);
  }

  return (
    <div>
      <div className="role-icons">
        {Object.keys(roleIcons).map((roleIcon, index) =>
          <img
            src={roleIcons[roleIcon]}
            alt={roleIcon}
            onClick={handleFilterChange}
            className={props.selectedRoles.includes(roleIcon) ? 'selected' : ''}
            key={index}
          />
        )}
      </div>
    </div>
  );
}

Filters.propTypes = {
  onFilterChange: PropTypes.func
};

export default Filters;
