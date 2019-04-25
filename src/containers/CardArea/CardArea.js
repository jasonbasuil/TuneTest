import React, { Component } from 'react';

import TopArtistCard from '../../components/TopArtistCard.js'

class CardArea extends Component {

  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div>
        {this.props.topArtists.items.map((topArtist => {
          return <TopArtistCard topArtist={topArtist}/>
        }))}

      </div>
    )
  }
}

export default CardArea
