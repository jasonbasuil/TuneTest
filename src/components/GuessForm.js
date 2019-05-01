import React, { Component } from 'react';

class GuessForm extends Component {

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleGuessSubmit}>
          <input class="guess_form" onChange={this.props.handleChange} type='text' placeholder='Type your guess'/>
          <input class="guess_submit" type='submit' />
        </form>
      </div>
    )
  }
}

export default GuessForm
