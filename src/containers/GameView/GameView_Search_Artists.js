import React, { Component } from 'react';
import SearchArtistCard from '../../components/SearchArtistCard.js'

class GameView_Search_Artists extends Component {

  constructor(props){
    super(props);
  }

  render() {
    if (this.props.artists.artists) {
      console.log(this.props.artists.artists.items)
    }

    return (
      <div >
        {this.props.artists.artists && this.props.artists.artists.items.slice(0,1).map((artist => {
          return <SearchArtistCard artist={artist}  />
        }))}
      </div>
    )
  }
}

export default GameView_Search_Artists
