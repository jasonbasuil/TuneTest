import React, { Component } from 'react';

class TopTrackCard_Search extends Component {

  imgUrl = this.props.topTrack.album.images[1].url
  artistName = this.props.topTrack.artists[0].name
  trackName = this.props.topTrack.name.toLowerCase()
  previewUrl = this.props.topTrack.preview_url

  render() {
    return (
      <div>
        <img
          class="card_column"
          id={this.trackName}
          src={"https://dashboard.snapcraft.io/site_media/appmedia/2017/12/spotify-linux-256.png"}
          alt={this.previewUrl} //this is super hacky
          onClick={
            (ev) => {this.props.handlePlayPreview(ev)}
          }
        />
        <html lang="en" dir="ltr">
          <body id={this.trackName + 'a'}>

          </body>
        </html>


      </div>

    )
  }
}

export default TopTrackCard_Search
