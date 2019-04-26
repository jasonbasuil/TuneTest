import React, { Component } from 'react';

import TopTrackCard from '../../components/TopTrackCard.js'

class CardArea_TopTracks extends Component {

  render() {
    return (
      <div>
        {this.props.topTracks.items && this.props.topTracks.items.map((topTrack => {
          console.log(topTrack)
          return <TopTrackCard key={topTrack.id} topTrack={topTrack}/>
        }))}

      </div>
    )
  }
}

export default CardArea_TopTracks
