import React, { Component } from 'react';

class ScoreView extends Component {

  render() {
    return (
      <div>
        <h2>Score view</h2>
        <h3>Score: {this.props.score}</h3>
      </div>
    )
  }
}

export default ScoreView
