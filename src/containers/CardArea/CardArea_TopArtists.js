import React, { Component } from 'react';

import TopArtistCard from '../../components/TopArtistCard.js'

const artistTopTracksAPI = 'https://api.spotify.com/v1/artists/' //+ {id}/top-tracks

class CardArea_TopArtists extends Component {

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
    let player = document.createElement("audio")
    player.id = artistName + '_is_active'
    player.src = randomTrackPreviewUrl
    player.controls = true
    player.autoplay = true
    player.type = "audio/mpeg"
    player.style = "display:none;"

    let playerDiv = document.getElementById(artistName + 'a')
    playerDiv.appendChild(player)
  }

  removePlayPreview = (artistName) => {
    let elementToRemove = document.getElementById(artistName + '_is_active')
    elementToRemove.parentNode.removeChild(elementToRemove)
    return console.log('already a player')
  }


  render() {
    return (
      <div>
        {this.props.topArtists.items && this.props.topArtists.items.map((topArtist => {
          return <TopArtistCard
                    key={topArtist.id}
                    topArtist={topArtist}
                    handlePlayPreview={() => this.handlefetchArtistTopTracks}
                  />
        }))}

      </div>
    )
  }
}

export default CardArea_TopArtists
