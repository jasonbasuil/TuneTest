import React, { Component } from 'react';

class TopTrackCard extends Component {

  imgUrl = this.props.topTrack.album.images[1].url
  artistName = this.props.topTrack.artists[0].name
  trackName = this.props.topTrack.name.toLowerCase()
  previewUrl = this.props.topTrack.preview_url

  render() {
    return (
      <div>
        <img
          id={this.trackName}
          src={"http://www.harveymaria.com/core/media/media.nl?id=68014&c=626987&h=1bdd59d4f929586d63cd"}
          alt={this.previewUrl} //this is super hacky
          onClick={this.props.handlePlayPreview()}
        />
        <html lang="en" dir="ltr">
          <body id={this.trackName + 'a'}>
            
          </body>
        </html>
        <h4>{this.trackName} - {this.artistName}</h4>
      </div>

    )
  }
}

export default TopTrackCard
