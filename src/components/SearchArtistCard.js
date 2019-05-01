import React, { Component } from 'react';

class SearchArtistCard extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <img src={this.props.artist.images[0] ? this.props.artist.images[1].url : 'nothing'}
          alt={this.props.artist.name}
        />
        <h4>{this.props.artist.name}</h4>
      </div>

    )
  }
}

export default SearchArtistCard
