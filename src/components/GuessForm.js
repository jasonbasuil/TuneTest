import React, { Component } from 'react';

class GuessForm extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>This is the guess form for the game</h2>
        <form >
          <input type='text' placeholder='Guess a top artist'/>
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default GuessForm
