import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import Login from './containers/LoginView/Login.js'
import GameView_TopArtists from './containers/GameView/GameView_TopArtists.js'
import GameView_TopTracks from './containers/GameView/GameView_TopTracks.js'
import GameView_Search from './containers/GameView/GameView_Search.js'

import ProfileView from './containers/ProfileView/ProfileView.js'
import About from './components/About.js'

const topArtistsAPI = 'https://api.spotify.com/v1/me/top/artists'
const topTracksAPI = 'https://api.spotify.com/v1/me/top/tracks'
const userProfileAPI = 'https://api.spotify.com/v1/users/'


class App extends Component {

  constructor() {
    super()
    this.state = {
      in_artist: 'yes we can!',
      topArtists: [],
      topTracks: [],
      userInfo: []
    }
  }

  componentDidMount() {
    this.fetchTopArtists()
    this.fetchTopTracks()
    this.fetchUserProfile()
  }

  fetchTopArtists = () => {
    fetch(topArtistsAPI, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('currentUserAccessToken')
      }
    })
    .then(res => res.json())
    .then(topArtists => {
      this.setState({topArtists: topArtists})
    })
  }

  fetchTopTracks = () => {
    fetch(topTracksAPI, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('currentUserAccessToken')
      }
    })
    .then(res => res.json())
    .then(topTracks => {
      this.setState({topTracks: topTracks})
    })
  }

  fetchUserProfile = () => {
    fetch(userProfileAPI + localStorage.getItem('currentUserId'), {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('currentUserAccessToken')
      }
    })
    .then(res => res.json())
    .then(user => {
      this.setState({userInfo: user})
    })
  }



  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <div class="navbar">
              <NavLink activeClassName="active" exact to="/app">Home</NavLink>{' '}
              <NavLink activeClassName="active" to="/top-artists">Top Artists</NavLink>{' '}
              <NavLink activeClassName="active" to="/top-tracks">Top Tracks</NavLink>{' '}
              <NavLink activeClassName="active" to="/search">Search</NavLink>{' '}
              <NavLink activeClassName="active" to="/profile">Profile</NavLink>{' '}
              <NavLink activeClassName="active" to="/logout">Logout</NavLink>{' '}
            </div>

            <div>
              <Route exact path="/" component={Login}/>
              <Route path="/app" component={About}/>
              <Route
                path="/top-artists"
                render={(props) => <GameView_TopArtists topArtists={this.state.topArtists}/>}
              />
              <Route path="/top-tracks"
                render={(props) => <GameView_TopTracks topTracks={this.state.topTracks}/>}
              />
              <Route path="/search"
                render={(props) => <GameView_Search />}
              />
              <Route
                path="/profile"
                render={(props) => <ProfileView userInfo={this.state.userInfo}/>}
              />
              <Route
                path="/logout"
                component={About}
              />
            </div>
          </div>
        </Router>
      </div>
  );
}
}

export default App;
