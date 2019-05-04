import React, { Component } from 'react';

class SearchArtistCard extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <img class='click-artist'
          src={this.props.artist.images[0] ? this.props.artist.images[1].url : 'nothing'}
          alt={this.props.artist.id}
          onClick={(ev) => {this.props.handleArtistSelect(ev)}}
        />
        <h4>{this.props.artist.name}</h4>
        <div>
          <p id='click_artist_to_begin'>Click artist to begin</p>
        </div>
      </div>

    )
  }
}

export default SearchArtistCard
