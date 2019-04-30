import React, { Component } from 'react';

class GameStart extends Component {

  render() {
    return (
      <div>
        <a href="localhost:3000/api/v1/new-top-tracks-game">New Game</a>
        <button>End Game</button>
      </div>
    )
  }
}

export default GameStart
