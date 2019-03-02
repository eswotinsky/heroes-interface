import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Home from './Home';
import HeroDetails from './HeroDetails';
import Error404 from './Error404';
import '../css/App.css';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      heroList: [],
      heroListMaster: [],
      selectedHeroData: {},
      selectedRoles: [],
      isLoading: false
    };
    this.handleHeroSelection = this.handleHeroSelection.bind(this);
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

  handleHeroSelection(clickedHero) {
    let newSelectedHeroData = this.state.heroListMaster.filter(hero => hero.name === clickedHero)[0];
    this.setState({selectedHeroData: newSelectedHeroData});
  }

  handleFilterChange(clickedRole) {
    let newSelectedRoles = this.state.selectedRoles;
    newSelectedRoles.includes(clickedRole) ? newSelectedRoles = newSelectedRoles.filter(role => role !== clickedRole) : newSelectedRoles.push(clickedRole);
    let newHeroList;
    newSelectedRoles.length === 0 ? newHeroList = this.state.heroListMaster : newHeroList = this.state.heroListMaster.filter(hero => newSelectedRoles.includes(hero.role));
    this.setState({
      heroList: newHeroList,
      selectedRoles: newSelectedRoles
    });
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={(props) =>
            <Home
              {...props}
              heroList={this.state.heroList}
              selectedRoles={this.state.selectedRoles}
              isLoading={this.state.isLoading}
              onHeroSelection={this.handleHeroSelection}
              onFilterChange={this.handleFilterChange}
            />}
          />
          <Route path="/heroes/:hero" render={(props) =>
            <HeroDetails {...props} selectedHeroData={this.state.selectedHeroData} />}
          />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
