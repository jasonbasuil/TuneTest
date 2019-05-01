import React, { Component } from 'react';

const artistTopTracksAPI = 'https://api.spotify.com/v1/artists/' //+ {id}/top-tracks


class TopArtistCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isCorrect: false
    }
  }

  imgUrl = this.props.topArtist.images[2].url
  artistName = this.props.topArtist.name.toLowerCase()
  artistSpotifyId = this.props.topArtist.id

  /////////////////copied from CardArea_TopArtists

  handlefetchArtistTopTracks = (ev) => {
    let artistSpotifyId = ev.target.alt
    this.fetchArtistTopTracks(artistSpotifyId)
  }

  fetchArtistTopTracks = (artistSpotifyId) => {
    fetch(artistTopTracksAPI + artistSpotifyId + '/top-tracks?' + 'country=US', {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('currentUserAccessToken')
    }}
  ).then(res => res.json())
  .then(topTracks => {
    console.log(topTracks)
    this.getRandomTopTrack(topTracks)
  })
  }

  getRandomTopTrack = (topTracks) => {
    let randomInt = Math.floor(Math.random() * 10)
    let randomTrackPreviewUrl = topTracks.tracks[randomInt].preview_url

    //grabbing artist name and making it match id on <TopArtistCard/>
    let artistName = topTracks.tracks[randomInt].artists[0].name.toLowerCase()
    this.handlePlayPreview(randomTrackPreviewUrl, artistName)
  }

  handlePlayPreview = (randomTrackPreviewUrl, artistName) => {
    console.log(randomTrackPreviewUrl);
    console.log(artistName)

    //add 'a' just as a differentiator when player is rendered
    if (document.getElementById(artistName + 'a').childNodes.length > 0){
      return this.removePlayPreview(artistName)
    }

    let image = document.getElementById(artistName)
    image.src = "https://d2814gcejiq38s.cloudfront.net/wp-content/uploads/2018/11/play-button-image.png"

    let player = document.createElement("audio")
    player.id = artistName + '_is_active'
    player.src = randomTrackPreviewUrl
    player.controls = true
    player.autoplay = true
    player.type = "audio/mpeg"
    player.style = "display:none;"

    let playerDiv = document.getElementById(artistName + 'a')
    playerDiv.appendChild(player)

    //remove player if user hasn't clicked to stop
    // setTimeout(() => {this.removePlayPreview(artistName)}, 30000);
  }

  removePlayPreview = (artistName) => {
    let elementToRemove = document.getElementById(artistName + '_is_active')
    elementToRemove.parentNode.removeChild(elementToRemove)

    let image = document.getElementById(artistName)
    image.src = "https://dashboard.snapcraft.io/site_media/appmedia/2017/12/spotify-linux-256.png"
    return console.log('already a player')
  }


  render() {
    return (
      <div class="card_column">
        <img
          id={this.artistName}
          src={"https://dashboard.snapcraft.io/site_media/appmedia/2017/12/spotify-linux-256.png"}
          alt={this.artistSpotifyId}
          onClick={(ev) => {this.handlefetchArtistTopTracks(ev)}} ///////changing this real quick
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
