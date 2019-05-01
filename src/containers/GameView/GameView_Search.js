import React, { Component } from 'react';

import GuessForm from '../../components/GuessForm.js'
import NewArtistForm from '../../components/NewArtistForm.js'
import GameView_Search_Artists from './GameView_Search_Artists.js'
import CardArea_TopArtists from '../CardArea/CardArea_TopArtists.js'
import LogView from '../LogView/LogView.js'
import ScoreView from '../ScoreView/ScoreView.js'

const searchAPI = 'https://api.spotify.com/v1/search?query='


class GameView_Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      artists: [],
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

  handleChange = (ev) => {
    console.log('handling change')
    this.setState({search: ev.target.value })
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


  render() {
    return (
      <div>
        <h1>Search</h1>
        <p>Search for a new Artist:</p>
        <NewArtistForm
          handleNewArtistSubmit={this.handleNewArtistSubmit}
          handleChange={this.handleChange}
        />
        <GameView_Search_Artists
          artists={this.state.artists}
        />
      </div>
    )
  }
}

export default GameView_Search
