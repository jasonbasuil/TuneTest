import React, { Component } from 'react';

import GuessForm from '../../components/GuessForm.js'
import NewArtistForm from '../../components/NewArtistForm.js'
import GameView_Search_Artists from './GameView_Search_Artists.js'
import CardArea_Search_TopTracks from '../CardArea/CardArea_Search_TopTracks.js'
import LogView from '../LogView/LogView.js'
import ScoreView from '../ScoreView/ScoreView.js'

const searchAPI = 'https://api.spotify.com/v1/search?query='
const artistTopTracksAPI = 'https://api.spotify.com/v1/artists/'

class GameView_Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      artists: [],
      selectedArtistTopTracks: [],
      guess: '',
      score: 0
    }
  }

  componentDidMount() {

  }

  handleNewArtistSubmit = (ev) => {
    ev.preventDefault()
    console.log('submitting new artist')
    this.fetchNewArtists(this.state.search)
  }

  handleArtistChange = (ev) => {
    console.log('handling change')
    this.setState({search: ev.target.value })
  }

  handleChange = (ev) => {
    console.log('handling change')
    this.setState({guess: ev.target.value })
  }

  topTrackNames = () => {
    let topTrackNames = this.state.selectedArtistTopTracks.tracks.map((track => {
      return track.name.toLowerCase()}))
    return topTrackNames
  }

  handleGuessSubmit = (ev) => {
    console.log('handling submit')
    ev.preventDefault()
    let topTrackNames = this.topTrackNames()
    console.log(topTrackNames)
    if (topTrackNames.includes(this.state.guess.toLowerCase())){
      console.log('correct!')
      this.setState({score: this.state.score + 200})
      //change an artist card's view to "showing"
      //grab this.artistName
      this.showAlbumCover()
    }
  }

  //may need the entire event
  showAlbumCover = () => {
    let guess = this.state.guess.toLowerCase()
    let trackImg;
    console.log(this.topTrackNames())
    
    this.state.selectedArtistTopTracks.tracks.map((track) => {
      if (track.name.toLowerCase() === guess) {
        trackImg =  track.album.images[1].url
      }
    })
    let correctCard = document.getElementById(guess)
    correctCard.src= trackImg
    this.setState({guess: ''})
  }


  fetchNewArtists = (searchTerm) => {
    console.log(searchTerm)
    console.log('fetching new artists')
    let queryString = searchTerm + '&type=artist'
    console.log(queryString)
    fetch(searchAPI + queryString, {
      headers: {
         "Authorization": 'Bearer ' + localStorage.getItem('currentUserAccessToken')
      }
    })
    .then(res => res.json())
    .then(artists => {
      this.setState({artists: artists})
    })
    .then(() => {this.showArtistResults()})
  }

  showArtistResults = () => {
    console.log(this.state.artists.artists.items)
  }

  handleArtistSelect = (ev) => {
    this.fetchNewArtistsTopTracks(ev)
  }

  fetchNewArtistsTopTracks = (ev) => {
    console.log(ev.target.alt)
    let artistSpotifyId = ev.target.alt
    fetch(artistTopTracksAPI + artistSpotifyId + '/top-tracks?country=US', {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('currentUserAccessToken')
      }
    })
    .then(res => res.json())
    .then(topTracks => {
      this.setState({selectedArtistTopTracks: topTracks})
    })
  }


  render() {
    return (
      <div>
        <h1>Search</h1>
        <p>Search for a new Artist:</p>
        <NewArtistForm
          handleNewArtistSubmit={this.handleNewArtistSubmit}
          handleArtistChange={this.handleArtistChange}
        />
        <GameView_Search_Artists
          artists={this.state.artists}
          handleArtistSelect={this.handleArtistSelect}
        />
        <CardArea_Search_TopTracks
          topTracks={this.state.selectedArtistTopTracks}
        />
        <GuessForm
          guess={this.state.guess}
          handleChange={this.handleChange}
          handleGuessSubmit={this.handleGuessSubmit}
        />
        <ScoreView score={this.state.score}/>
      </div>
    )
  }
}

export default GameView_Search
