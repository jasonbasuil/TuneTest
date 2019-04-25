import React, { Component } from 'react';

let imgUrl;
let artistName;

class TopArtistCard extends Component {

  constructor(props){
    super(props)
    imgUrl = this.props.topArtist.images[2].url
    artistName = this.props.topArtist.name
  }



  render() {
    return (
      <div>
        <img src={imgUrl}/>
        <h4>{artistName}</h4>
      </div>
    )
  }
}

export default TopArtistCard
