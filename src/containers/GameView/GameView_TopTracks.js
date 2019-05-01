import React, { Component } from 'react';

import GuessForm from '../../components/GuessForm.js'
import GameStart from '../../components/GameStart.js'
import CardArea_TopTracks from '../CardArea/CardArea_TopTracks.js'
import LogView from '../LogView/LogView.js'
import ScoreView from '../ScoreView/ScoreView.js'



class GameView_TopTracks extends Component {

  constructor(props) {
    super(props);
    this.state = {
      guess: '',
      score: 0
    }
  }

  topTrackNames = () => {
    let topTrackNames = this.props.topTracks.items.map((track => {
      return track.name.toLowerCase()}))
    return topTrackNames
  }

  handleChange = (ev) => {
    this.setState({guess: ev.target.value })
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

  showAlbumCover = () => {
    let guess = this.state.guess.toLowerCase()
    let trackImg;
    this.props.topTracks.items.map((track) => {
      if (track.name.toLowerCase() === guess) {
        trackImg =  track.album.images[1].url
      }
    })
    let correctCard = document.getElementById(guess)
    correctCard.src= trackImg
    this.setState({guess: ''})
  }

  render() {
    return (
      <div>
        <h1>Your Top Tracks</h1>
        <p>Guess a track name:</p>
        <GuessForm
          guess={this.state.guess}
          handleChange={this.handleChange}
          handleGuessSubmit={this.handleGuessSubmit}/>
        <CardArea_TopTracks topTracks={this.props.topTracks}/>
        <LogView />
        <ScoreView score={this.state.score}/>
      </div>
    )
  }
}

export default GameView_TopTracks
