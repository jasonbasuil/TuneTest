import React, { Component } from 'react';

import GuessForm from '../../components/GuessForm.js'
import CardArea from '../CardArea/CardArea.js'
import LogView from '../LogView/LogView.js'
import ScoreView from '../ScoreView/ScoreView.js'

class GameView extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>We're in GameView</h2>
        <GuessForm />
        <CardArea topArtists={this.props.topArtists}/>
        <LogView />
        <ScoreView />
      </div>
    )
  }
}

export default GameView
