import React, { Component } from 'react';

class GuessForm extends Component {

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleGuessSubmit}>
          <input class="guess_form" value={this.props.guess} onChange={this.props.handleChange} type='text' placeholder='Type your guess'/>

        </form>
      </div>
    )
  }
}

export default GuessForm
