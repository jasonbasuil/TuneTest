import React, { Component } from 'react';

import GuessForm from '../../components/GuessForm.js'
import NewArtistForm from '../../components/NewArtistForm.js'
import CardArea_TopArtists from '../CardArea/CardArea_TopArtists.js'
import LogView from '../LogView/LogView.js'
import ScoreView from '../ScoreView/ScoreView.js'


class GameView_Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      guess: '',
      score: 0
    }
  }

  handleNewArtistSubmit = () => {
    console.log('submitting new artist')
  }


  render() {
    return (
      <div>
        <h1>Search</h1>
        <p>Search for a new Artist:</p>
        <NewArtistForm handleNewArtistSubmit={this.handleNewArtistSubmit}/>

      </div>
    )
  }
}

export default GameView_Search
