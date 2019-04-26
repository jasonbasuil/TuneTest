import React, { Component } from 'react';

import GuessForm from '../../components/GuessForm.js'
import CardArea from '../CardArea/CardArea.js'
import LogView from '../LogView/LogView.js'
import ScoreView from '../ScoreView/ScoreView.js'


class GameView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      guess: '',
      score: 0
    }
  }

  topArtistNames = () => {
    let topArtistNames = this.props.topArtists.items.map((artist => {
      return artist.name.toLowerCase()}))
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
      this.setState({score: this.state.score + 200})
      //change an artist card's view to "showing"
      //grab this.artistName
      this.showAlbumCover()
    }
  }

  showAlbumCover = () => {
    let guess = this.state.guess.toLowerCase()
    let artistImg;
    this.props.topArtists.items.map((artist) => {
      if (artist.name.toLowerCase() === guess) {
        artistImg =  artist.images[2].url
      }
    })
    let correctCard = document.getElementById(guess)
    correctCard.src= artistImg
  }





  render() {
    return (
      <div>
        <h2>We're in GameView</h2>
        <GuessForm handleChange={this.handleChange} handleGuessSubmit={this.handleGuessSubmit}/>
        <CardArea topArtists={this.props.topArtists}/>
        <LogView />
        <ScoreView score={this.state.score}/>
      </div>
    )
  }
}

export default GameView
