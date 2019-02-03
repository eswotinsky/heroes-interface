import React, {Component} from 'react';
import axios from 'axios';
import HeroList from './HeroList';
import Filters from './Filters';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroList: [],
      heroListMaster: [],
      selectedRoles: [],
      isLoading: false
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  componentDidMount() {
    this.setState({isLoading: true});
    axios.get('http://hotsapi.net/api/v1/heroes')
      .then(response => this.setState({
        heroList: response.data,
        heroListMaster: response.data,
        isLoading: false,
      }))
  }

  handleFilterChange(clickedRole) {
    let newSelectedRoles = this.state.selectedRoles;
    newSelectedRoles.includes(clickedRole) ? newSelectedRoles = newSelectedRoles.filter(role => role !== clickedRole) : newSelectedRoles.push(clickedRole);
    let newHeroList = this.state.heroListMaster.filter(hero => newSelectedRoles.includes(hero.role));
    this.setState({
      heroList: newHeroList,
      selectedRoles: newSelectedRoles
    });
    console.log(newSelectedRoles);
  }

  render() {
    return (
      <div>
        <Filters
          selectedRoles={this.state.selectedRoles}
          onFilterChange={this.handleFilterChange}
        />
        <HeroList
          heroList={this.state.heroList}
          isLoading={this.state.isLoading}
        />
      </div>
    );
  }

}

export default Home;
