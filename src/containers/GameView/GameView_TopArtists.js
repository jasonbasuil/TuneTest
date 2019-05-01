import React, { Component } from 'react';

import GuessForm from '../../components/GuessForm.js'
import CardArea_TopArtists from '../CardArea/CardArea_TopArtists.js'
import LogView from '../LogView/LogView.js'
import ScoreView from '../ScoreView/ScoreView.js'


class GameView_TopArtists extends Component {

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
    this.setState({guess: ''})
  }

  showAlbumCover = () => {
    let guess = this.state.guess.toLowerCase()
    let artistImg;
    this.props.topArtists.items.map((artist) => {
      if (artist.name.toLowerCase() == guess) {
        artistImg =  artist.images[1].url
        console.log(artist.name.toLowerCase())

        let correctCard = document.getElementById(guess)
        console.log(correctCard)
        correctCard.src= artistImg
        correctCard.onclick = null

        this.setState({guess: ''})

      }
    })

    // document.getElementById(artist.name.toLowerCase()).onclick = null;
  }

  render() {
    return (
      <div>
        <h1>Your Top Artists</h1>
        <p>Guess an artist name:</p>
        <GuessForm
          guess={this.state.guess}
          handleChange={this.handleChange}
          handleGuessSubmit={this.handleGuessSubmit}
        />
        <CardArea_TopArtists topArtists={this.props.topArtists}/>
        <LogView />
        <ScoreView score={this.state.score}/>
      </div>
    )
  }
}

export default GameView_TopArtists
