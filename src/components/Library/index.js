import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Row, Col } from 'reactstrap';

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
          <Col tag={Link} to={`/album/${album.slug}`} key={index} 
             xs="12" sm="6" md="4" xl="3" className="albumLink">
            <img height="265" className="img-fluid" src={album.albumCover} alt={album.title} />
            <div className="albumLinkTitle">{album.title}</div>
            <div className="albumLinkArtist">{album.artist}</div>
            <div className="albumLinkSongCount">{album.songs.length} songs</div>
          </Col>
        )
      );
    }

    return (
      <Row tag="section" className="albumList">
        {
          albums
        }
      </Row>
    );
  }  
}

export default Library;