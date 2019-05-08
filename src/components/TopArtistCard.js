import React, { Component } from 'react';

const artistTopTracksAPI = 'https://api.spotify.com/v1/artists/' //+ {id}/top-tracks


class TopArtistCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isCorrect: false,
      currentArtistPlaying: '',
      songPlaying: false,
      clickedToRemovePlayer: false
    }
  }

  imgUrl = this.props.topArtist.images[2].url
  artistName = this.props.topArtist.name.toLowerCase()
  artistSpotifyId = this.props.topArtist.id

  /////////////////copied from CardArea_TopArtists

  handlefetchArtistTopTracks = (ev) => {
    console.log(ev.target.id)
    let artistJustClicked = ev.target.id
    let currentArtistPlaying = this.props.currentArtistPlaying
    console.log(currentArtistPlaying.length)

    if (currentArtistPlaying.length == 0){
      //start of game. continue as usual
      let artistSpotifyId = ev.target.alt
      this.fetchArtistTopTracks(artistSpotifyId)
    } else if (artistJustClicked == currentArtistPlaying) {
        //continue as usual
        let artistSpotifyId = ev.target.alt
        this.fetchArtistTopTracks(artistSpotifyId)
    } else if (artistJustClicked != currentArtistPlaying){
      // destroy that player
      // this.removePlayPreview(currentArtistPlaying)
      // continue as usual
      let artistSpotifyId = ev.target.alt
      this.fetchArtistTopTracks(artistSpotifyId)
    }

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

    //iterate over topTracks and find the artist that matches artistName
    let artist = topTracks.tracks[randomInt].artists.find(artist => artist.name.toLowerCase() === this.artistName)
    let artistName = artist.name.toLowerCase()

    this.handlePlayPreview(randomTrackPreviewUrl, artistName)
  }

  handlePlayPreview = (randomTrackPreviewUrl, artistName) => {
    console.log(randomTrackPreviewUrl);
    console.log(artistName)

    //add 'a' just as a differentiator when player is rendered
    if (document.getElementById(artistName + 'a').childNodes.length > 0){
      return this.removePlayPreviewOnClick(artistName)
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

    this.setState({songPlaying: true,
                   currentArtistPlaying: this.props.currentArtistPlaying})

    //remove player if user hasn't clicked to stop

    setTimeout(() => {this.removePlayPreviewAfter30S(artistName)}, 30000);

  }

  removePlayPreviewAfter30S = (artistName) => {
    if (this.state.clickedToRemovePlayer === false) {
      let elementToRemove = document.getElementById(artistName + '_is_active')
      elementToRemove.parentNode.removeChild(elementToRemove)
      let image = document.getElementById(artistName)
      image.src = "https://dashboard.snapcraft.io/site_media/appmedia/2017/12/spotify-linux-256.png"

      this.setState({songPlaying: false})
      this.setState({currentArtistPlaying: ''})
    }
  }

  removePlayPreviewOnClick = (artistName) => {
    this.setState({clickedToRemovePlayer: true})
    let elementToRemove = document.getElementById(artistName + '_is_active')
    elementToRemove.parentNode.removeChild(elementToRemove)
    let image = document.getElementById(artistName)
    image.src = "https://dashboard.snapcraft.io/site_media/appmedia/2017/12/spotify-linux-256.png"

    this.setState({songPlaying: false})
    this.setState({currentArtistPlaying: ''})
  }

  revealHint = () => {
    let hint = document.getElementById(this.artistName + '_hint_div')
    if (hint.style.display === 'block') {
      hint.style.display = 'none'
    } else { hint.style.display = 'block' }
  }


  render() {
    return (
      <div>
        <img
          class="card_column"
          id={this.artistName}
          src={"https://dashboard.snapcraft.io/site_media/appmedia/2017/12/spotify-linux-256.png"}
          alt={this.artistSpotifyId}
          onClick={
            (ev) => {this.handlefetchArtistTopTracks(ev); this.props.handleCurrentPlayer(ev)}}
        />
        <button class='hint_button' onClick={() => this.revealHint()}>🤔</button>
        <div id={this.artistName + '_hint_div'} style={{display: 'none'}}>
          {this.artistName}
        </div>
        <html lang="en" dir="ltr">
          <body id={this.artistName + 'a'}>

          </body>
        </html>
        <h4></h4>
      </div>
    )
  }
}

export default TopArtistCard
