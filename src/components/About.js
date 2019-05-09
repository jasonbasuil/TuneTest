import React, { Component } from 'react';
import logo from '../assets/LogoMakr_0m1q2k.png'

const usersAPI = 'http://localhost:3000/api/v1/users/2'

class About extends Component {

  constructor() {
    super()
    this.state = {
      currentUser: '',
      currentUserAccessToken: '',
      currentUserRefreshToken: ''
    }
  }

  //http://localhost:3000/api/v1/users/1
  //need to get the user that just got redirected (is it necessarily the newest in DB?)

  //Fetch a user that just signed in and set their name and tokens to localStorage
  fetchUserThatJustSignedIn = () => {
    console.log('handling session')
    fetch(usersAPI)
    .then(res => res.json())
    .then((user) => {
      console.log(user)
      localStorage.setItem('currentUser', user.name);
      localStorage.setItem('currentUserId', user.spotify_id);
      localStorage.setItem('currentUserAccessToken', user.access_token);
      localStorage.setItem('currentUserRefreshToken', user.refresh_token);
      }
    )
  }

  componentDidMount() {
    this.fetchUserThatJustSignedIn()
  }

  render() {
    return (
      <div>
        <h1 class='logo'>TUNETEST</h1>

        <h2>How well do you know your own favorite music?</h2>
        <h5>Test your music knowledge by playing any of the games above.</h5>

        <p>Change your mood</p>

      </div>
    )
  }
}

export default About
