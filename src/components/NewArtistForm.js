import React, { Component } from 'react';

class NewArtistForm extends Component {

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleGuessSubmit}>
          <input class="guess_form" value={this.props.guess} onChange={this.props.handleChange} type='text' placeholder='Search for a new Artist'/>

        </form>
      </div>
    )
  }
}

export default NewArtistForm
