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
      userInfo: [],
      mood: ''
    }
  }

  componentDidMount() {
    this.fetchTopArtists()
    this.fetchTopTracks()
    this.fetchUserProfile()

    //setting moods
    let happy = document.getElementById('happy')
    happy.addEventListener('click', () => {this.changeMood('happy')})

    let sad = document.getElementById('sad')
    sad.addEventListener('click', () => {this.changeMood('sad')})

    let wink = document.getElementById('wink')
    wink.addEventListener('click', () => {this.changeMood('wink')})

    let sick = document.getElementById('sick')
    sick.addEventListener('click', () => {this.changeMood('sick')})

    let mad = document.getElementById('mad')
    mad.addEventListener('click', () => {this.changeMood('mad')})

    let love = document.getElementById('love')
    love.addEventListener('click', () => {this.changeMood('love')})
  }

  changeMood = (mood) => {

    let window = document.querySelector('html')
    if (this.state.mood.length === 0) {
      window.classList.remove('window')
      window.classList.add(mood)
      this.setState({mood: mood })
    } else if (this.state.mood.length > 0) {
      window.classList.remove(this.state.mood)
      window.classList.add(mood)
      this.setState({mood: mood })
    }
  }


  changeHappy = () => {
    let window = document.querySelector('html')
    window.classList.remove('window')
    window.classList.add('happy')
  }

  changeSad = () => {
    let window = document.querySelector('html')
    window.classList.remove('window')
    window.classList.add('sad')
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
        <div class='mood-bar'>
          <mood id='happy'>
            😁
          </mood>
          <mood id='sad'>
            😔
          </mood>
          <mood id='wink'>
            😜
          </mood>
          <mood id='sick'>
            🤢
          </mood>
          <mood id='mad'>
            😡
          </mood>
          <mood id='love'>
            😍
          </mood>
        </div>
      </div>
  );
}
}

export default App;
