import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Library.css';

import albumData from './../../data/albums';

class Library extends Component 
{
  constructor(props)
  {
    super(props);

    this.state = {
      albums: albumData
    };
  }

  render()
  {
    var albums = [];
    for (let i = 0; i < 10; i++)
    {
      albums.push(
          this.state.albums.map((album, index) =>
          <Link to={`/album/${album.slug}`} key={index} className="albumLink col-12 col-sm-6 col-md-4 col-xl-3">
            <img height="265" className="img-fluid" src={album.albumCover} alt={album.title} />
            <div className="albumLinkTitle">{album.title}</div>
            <div className="albumLinkArtist">{album.artist}</div>
            <div className="albumLinkSongCount">{album.songs.length} songs</div>
          </Link>
        )
      );
    }

    return (
      <section className="row albumList">
      {
        albums
      }
      </section>
    );
  }  
}

export default Library;