import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import Login from './containers/LoginView/Login.js'
import TopArtists from './components/TopArtists.js'
import TopTracks from './components/TopTracks.js'
import Profile from './components/Profile.js'


class App extends Component {

  constructor() {
    super()
    this.state = {
      in_artist: 'yes we can!'
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <div>
              <NavLink activeClassName="active" exact to="/">Home</NavLink>{' '}
              <NavLink activeClassName="active" to="/top-artists">Top Artists</NavLink>{' '}
              <NavLink activeClassName="active" to="/top-tracks">Top Tracks</NavLink>{' '}
              <NavLink activeClassName="active" to="/profile">Profile</NavLink>{' '}
            </div>

            <div>
              <Route exact path="/" component={Login}/>
              <Route
                path="/top-artists"
                render={(props) => <TopArtists artists={this.state.in_artist}/>}
              />
              <Route path="/top-tracks" component={TopTracks} />
              <Route path="/profile" component={Profile} />
            </div>
          </div>
        </Router>
      </div>
  );
}
}

export default App;
