import React, { Component } from 'react';

const usersAPI = 'http://localhost:3000/api/v1/users/1'

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
        <h2>This is the About page!</h2>
        <h5>It will describe what the application is and how to use it.</h5>
        <p>A user gets redirected here after initial login with Spotify</p>
      </div>
    )
  }
}

export default About
