import React, { Component } from 'react';

import Profile from '../../components/Profile.js'

class ProfileView extends Component {

  render() {
    return (
      <div>
        <Profile user={this.props.userInfo}/>
      </div>
    )
  }
}

export default ProfileView
