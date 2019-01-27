import React, {Component} from 'react';
import axios from 'axios';
import HeroList from './HeroList';
import Filters from './Filters';

class Home extends Component {
  constructor(props) {
    super();
    this.state = {
      heroList: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({isLoading: true});
    axios.get('http://hotsapi.net/api/v1/heroes')
      .then(response => this.setState({
        heroList: response.data,
        isLoading: false,
      }))
  }

  render() {
    return (
      <div>
        <Filters />
        <HeroList
          heroList={this.state.heroList}
          isLoading={this.state.isLoading}
        />
      </div>
    );
  }

}

export default Home;
