import React, { Component } from 'react';

class ScoreView extends Component {

  render() {
    return (
      <div>
        <h2 class='score'>Score: {this.props.score}</h2>
      </div>
    )
  }
}

export default ScoreView
