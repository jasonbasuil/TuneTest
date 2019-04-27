import React, { Component } from 'react';

import TopArtistCard from '../../components/TopArtistCard.js'

class CardArea_TopArtists extends Component {

  render() {
    return (
      <div>
        {this.props.topArtists.items && this.props.topArtists.items.map((topArtist => {
          return <TopArtistCard
                    key={topArtist.id}
                    topArtist={topArtist}
                  />
        }))}

      </div>
    )
  }
}

export default CardArea_TopArtists
