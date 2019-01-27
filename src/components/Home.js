import React, {Component} from 'react';
import HeroList from './HeroList';

class Home extends Component {
  constructor(props) {
    super();
    this.state = {
      heroList: [
        {
          name: "Abathur",
          role: "specialist",
          icon_url: {
            "66x66": "http://s3.hotsapi.net/image.png"
          }
        },
        {
          name: "Zarya",
          role: "warrior",
          icon_url: {
            "66x66": "http://s3.hotsapi.net/image.png"
          }
        }
      ],
      isLoading: false
    };
  }

  render() {
    return (
      <div>
        <HeroList
          heroList={this.state.heroList}
          isLoading={this.state.isLoading}
        />
      </div>
    );
  }

}

export default Home;
