import React, { Component } from 'react';

class ScoreView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      score: props.score
    }
  }

  componentDidMount() {
    this.transformScore()
  }

  transformScore = () => {
    let rawScore = this.props.score
    while (rawScore > 0) {
      setTimeout(this.decrementScore(rawScore), 100)
    }
  }

  decrementScore = (rawScore) => {
    return rawScore - 10
    console.log(rawScore)
  }


  render() {
    return (
      <div>
        <h2>Score: {this.decrementScore()}</h2>
      </div>
    )
  }
}

export default ScoreView
