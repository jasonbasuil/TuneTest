import React, { Component } from 'react';

class TopTrackCard extends Component {

  imgUrl = this.props.topTrack.album.images[1].url
  artistName = this.props.topTrack.album.artists[0].name
  trackName = this.props.topTrack.album.name

  render() {
    return (
      <div>
        <img id={this.trackName.toLowerCase()} src={"http://www.harveymaria.com/core/media/media.nl?id=68014&c=626987&h=1bdd59d4f929586d63cd"} alt={'Track cover'}/>
        <h4>{this.trackName} - {this.artistName}</h4>
      </div>

    )
  }
}

export default TopTrackCard
