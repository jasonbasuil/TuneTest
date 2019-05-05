import React, { Component } from 'react';

class Progress extends Component {

  constructor(props){
    super(props);
    this.state = {
      guess: this.props.guess
    }
  }

  componentDidMount() {
    this.checkGuess()
  }

  checkGuess = () => {
    return document.addEventListener('keydown', ev => {
      if (this.props.guess && this.props.currentTrackChosen) {
        console.log('yes sirreee')
        let progress = document.getElementsByClassName('progress-bar')

        let trackIndex = this.props.currentTrackChosen.length - 1

        if (this.props.currentTrackChosen === this.props.guess){
          progress[0].style.color = '#98FB98'
        } else if (!this.props.currentTrackChosen.includes(this.props.guess)) {
          progress[0].style.color = '	red'
        } else if (this.props.currentTrackChosen.includes(this.props.guess)) {
          progress[0].style.color = 'white'
        }
      }
    })
  }

  render() {
    return (
      <div>
        <h1 class='progress-bar'>{this.props.guess}</h1>
      </div>
    )
  }
}

export default Progress
