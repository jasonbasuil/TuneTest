import React, { Component } from 'react';

class NewArtistForm extends Component {

  render() {
    return (
      <div>
        <form onSubmit={(ev) => this.props.handleNewArtistSubmit(ev)}>
          <input class="artist_submit" value={this.props.guess} onChange={this.props.handleChange} type='text' placeholder='Search for a new Artist'/>

        </form>
      </div>
    )
  }
}

export default NewArtistForm
