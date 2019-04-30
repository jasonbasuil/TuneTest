import React, { Component } from 'react';

import TopTrackCard from '../../components/TopTrackCard.js'

class CardArea_TopTracks extends Component {

  //creates audio html element and autoplays it
  handlePlayPreview = (ev) => {
    let trackName = ev.target.id

    //add 'a' just as a differentiator when player is rendered
    if (document.getElementById(trackName + 'a').childNodes.length > 0){
      return this.removePlayPreview(ev)
    }
    trackName = ev.target.id

    let image = ev.target
    image.src = "https://d2814gcejiq38s.cloudfront.net/wp-content/uploads/2018/11/play-button-image.png"

    let player = document.createElement("audio")
    player.id = trackName + '_is_active'
    player.src = ev.target.alt
    player.controls = true
    player.autoplay = true
    player.type = "audio/mpeg"
    player.style = "display:none;"

    let playerDiv = document.getElementById(trackName + 'a')
    playerDiv.appendChild(player)
  }

  removePlayPreview = (ev) => {
    ev.preventDefault()
    let trackName = ev.target.id
    let elementToRemove = document.getElementById(trackName + '_is_active')
    elementToRemove.parentNode.removeChild(elementToRemove)

    let image = ev.target
    image.src = "https://dashboard.snapcraft.io/site_media/appmedia/2017/12/spotify-linux-256.png"
    return console.log('already a player')
  }

  render() {
    return (
      <div class="card_row">
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
