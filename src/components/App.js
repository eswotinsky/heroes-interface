import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import HeroDetails from './HeroDetails';
import Error404 from './Error404';
import '../css/App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/heroes/:hero" component={HeroDetails} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}


export default App;
