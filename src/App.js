import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import Login from './containers/LoginView/Login.js'
import GameView from './containers/GameView/GameView.js'
import TopTracks from './components/TopTracks.js'
import Profile from './components/Profile.js'
import About from './components/About.js'

const topArtistsAPI = 'https://api.spotify.com/v1/me/top/artists'


class App extends Component {

  constructor() {
    super()
    this.state = {
      in_artist: 'yes we can!',
      topArtists: []
    }
  }

  componentDidMount() {
    console.log(localStorage.getItem('currentUserAccessToken'))
    this.fetchtopArtists()
  }

  fetchtopArtists = () => {
    fetch(topArtistsAPI, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('currentUserAccessToken')
      }
    })
    .then(res => res.json())
    .then(topArtists => {
      console.log(topArtists)
      this.setState({topArtists: topArtists})
    })
  }



  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <div>
              <NavLink activeClassName="active" exact to="/app">Home</NavLink>{' '}
              <NavLink activeClassName="active" to="/top-artists">Top Artists</NavLink>{' '}
              <NavLink activeClassName="active" to="/top-tracks">Top Tracks</NavLink>{' '}
              <NavLink activeClassName="active" to="/profile">Profile</NavLink>{' '}
            </div>

            <div>
              <Route exact path="/" component={Login}/>
              <Route path="/app" component={About}/>
              <Route
                path="/top-artists"
                render={(props) => <GameView topArtists={this.state.topArtists}/>}
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
