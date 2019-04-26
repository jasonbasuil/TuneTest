import React, { Component } from 'react';

class Profile extends Component {

  render() {
    return (
      <div>
        <h2>We're in Profile!</h2>
        <p>Username: {this.props.user.display_name}</p>
        <a href={this.props.user.href}>Open Your Spotify Account</a>
      </div>
    )
  }
}

export default Profile;
