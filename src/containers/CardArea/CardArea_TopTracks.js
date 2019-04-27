import React, { Component } from 'react';

import TopTrackCard from '../../components/TopTrackCard.js'

class CardArea_TopTracks extends Component {

  handlePlayPreview = (ev) => {
    console.log(ev.target.id)
    console.log(ev.target.alt)
    let trackName = ev.target.id
    let player = document.createElement("audio")
    player.src = ev.target.alt
    player.controls = true
    player.autoplay = true
    player.type = "audio/mpeg"

    let playerDiv = document.getElementById(trackName + 'a')
    playerDiv.appendChild(player)

  }

  render() {
    return (
      <div>
        {this.props.topTracks.items && this.props.topTracks.items.map((topTrack => {
          return <TopTrackCard
                    key={topTrack.id}
                    topTrack={topTrack}
                    handlePlayPreview={() => this.handlePlayPreview}
                  />
        }))}
      </div>
    )
  }
}

export default CardArea_TopTracks
