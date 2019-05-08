import React, { Component } from 'react';

class TopTrackCard extends Component {

  imgUrl = this.props.topTrack.album.images[1].url
  artistName = this.props.topTrack.artists[0].name
  trackName = this.props.topTrack.name.toLowerCase()
  previewUrl = this.props.topTrack.preview_url

  revealHint = () => {
    let hint = document.getElementById(this.trackName + '_hint_div')
    if (hint.style.display === 'block') {
      hint.style.display = 'none'
    } else { hint.style.display = 'block' }
  }

  render() {
    return (
      <div>
        <img
          class="card_column"
          id={this.trackName}
          src={"https://dashboard.snapcraft.io/site_media/appmedia/2017/12/spotify-linux-256.png"}
          alt={this.previewUrl} //this is super hacky
          onClick={
            (ev) => {this.props.handlePlayPreview(ev);
                     this.props.handleCurrentTrackChosen(ev)}
          }
        />
        <button class='hint_button' onClick={() => this.revealHint()}>🤔</button>
        <div id={this.trackName + '_hint_div'} style={{display: 'none'}}>
          {this.trackName}
        </div>
        <br/>
        <br/>
        <html lang="en" dir="ltr">
          <body id={this.trackName + 'a'}>

          </body>
        </html>


      </div>

    )
  }
}

export default TopTrackCard

// <h4>{this.trackName} - {this.artistName}</h4>
