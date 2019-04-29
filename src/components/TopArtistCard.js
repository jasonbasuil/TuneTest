import React, { Component } from 'react';

class TopArtistCard extends Component {

  imgUrl = this.props.topArtist.images[2].url
  artistName = this.props.topArtist.name.toLowerCase()
  artistSpotifyId = this.props.topArtist.id



  render() {
    return (
      <div className="TopArtistCards">
        <img
          id={this.artistName}
          src={"http://www.harveymaria.com/core/media/media.nl?id=68014&c=626987&h=1bdd59d4f929586d63cd"}
          alt={this.artistSpotifyId}
          onClick={this.props.handlePlayPreview()}
        />
        <html lang="en" dir="ltr">
          <body id={this.artistName + 'a'}>

          </body>
        </html>
        <h4>{this.artistName}</h4>
      </div>
    )
  }
}

export default TopArtistCard
