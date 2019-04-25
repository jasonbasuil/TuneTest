import React, { Component } from 'react';

import GuessForm from '../../components/GuessForm.js'
import CardArea from '../CardArea/CardArea.js'
import LogView from '../LogView/LogView.js'
import ScoreView from '../ScoreView/ScoreView.js'

class GameView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      guess: ''
    }
  }

  topArtistNames = () => {
    let topArtistNames = [];
    this.props.topArtists.items.map((artist => {
      topArtistNames.push(artist.name.toLowerCase())
    }))
    return topArtistNames
  }

  handleChange = (ev) => {
    console.log('handling change')
    this.setState({guess: ev.target.value })
  }

  handleGuessSubmit = (ev) => {
    console.log('handling submit')
    ev.preventDefault()
    let topArtistNames = this.topArtistNames()
    console.log(topArtistNames)
    if (topArtistNames.includes(this.state.guess.toLowerCase())){
      console.log('correct!')
    }
  }

  render() {
    return (
      <div>
        <h2>We're in GameView</h2>
        <GuessForm handleChange={this.handleChange} handleGuessSubmit={this.handleGuessSubmit}/>
        <CardArea topArtists={this.props.topArtists}/>
        <LogView />
        <ScoreView />
      </div>
    )
  }
}

export default GameView
