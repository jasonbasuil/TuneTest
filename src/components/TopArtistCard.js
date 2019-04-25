import React, { Component } from 'react';

class TopArtistCard extends Component {

  imgUrl = this.props.topArtist.images[2].url
  artistName = this.props.topArtist.name

  render() {
    return (
      <div>
        <img src={this.imgUrl} alt={'Album cover'}/>
        <h4>{this.artistName}</h4>
      </div>
    )
  }
}

export default TopArtistCard
