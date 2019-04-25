import React, { Component } from 'react';

class GuessForm extends Component {

  render() {
    return (
      <div>
        <h2>This is the guess form for the game</h2>
        <form onSubmit={this.props.handleGuessSubmit}>
          <input onChange={this.props.handleChange} type='text' placeholder='Guess a top artist'/>
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default GuessForm
