import React, { Component } from 'react';

class TopArtistCard extends Component {

  imgUrl = this.props.topArtist.images[2].url
  artistName = this.props.topArtist.name.toLowerCase()
  artistSpotifyId = this.props.topArtist.id



  render() {
    return (
      <div class="card_column">
        <img
          id={this.artistName}
          src={"https://dashboard.snapcraft.io/site_media/appmedia/2017/12/spotify-linux-256.png"}
          alt={this.artistSpotifyId}
          onClick={this.props.handlePlayPreview()}
        />
        <html lang="en" dir="ltr">
          <body id={this.artistName + 'a'}>

          </body>
        </html>
        <h4>{this.artistName}</h4>
      </div>
    )
  }
}

export default TopArtistCard
