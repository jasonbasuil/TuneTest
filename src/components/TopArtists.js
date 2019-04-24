import React, { Component } from 'react';

class TopArtists extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>We're in Top Artists!</h2>
        <h3>{this.props.artists}</h3>
      </div>
    )
  }
}

export default TopArtists
