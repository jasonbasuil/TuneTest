import React, { Component } from 'react';

class Profile extends Component {

  render() {
    return (
      <div>
        <h1>Welcome back, {this.props.user.display_name}</h1>
        <img src={this.props.user.images[0] ? this.props.user.images[0].url : null}/>
        <p>Follower count: {this.props.user.followers.total}</p>

        <a href={this.props.user.external_urls.spotify}>Open Your Spotify Account</a>
      </div>
    )
  }
}

export default Profile;
