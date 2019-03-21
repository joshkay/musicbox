import React, { Component } from 'react';
import albumData from './../../data/albums';

import { Row, Col } from 'reactstrap';

import PlayerBar from './../PlayerBar';

import './Album.css';

class Album extends Component
{
  constructor(props)
  {
    super(props);

    const album = albumData.find(album => {
      return album.slug === this.props.match.params.slug;
    });

    this.state = {
      album: album,
      currentSong: null,
      currentTime: null,
      duration: null,
      isPlaying: false,
      hoveredSong: null,
      volume: 1
    };

    this.audioElement = document.createElement('audio');
  }

  componentDidMount()
  {
    this.eventListeners = {
      ended: e => {
        this.setState({
          isPlaying: false,
          currentSong: null
        });
      },
      timeupdate: e => {
        this.setState({
          currentTime: this.audioElement.currentTime
        });
      },
      durationchange: e => {
        this.setState({
          duration: this.audioElement.duration
        });
      }
    };

    this.audioElement.addEventListener('ended', this.eventListeners.ended);
    this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
    this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
  }

  componentWillUnmount()
  {
    this.audioElement.src = null;
    this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
    this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
    this.audioElement.removeEventListener('ended', this.eventListeners.ended);
    this.audioElement = null;
  }

  play()
  {
    this.audioElement.play();
    this.setState({
      isPlaying: true
    });
  }

  pause()
  {
    this.audioElement.pause();
    this.setState({
      isPlaying: false
    });
  }

  setSong(song) 
  {
    this.audioElement.src = song.audioSrc;
    this.setState({
      currentSong: song
    });
  }

  formatTime(seconds)
  {
    if (isNaN(seconds))
    {
      return "-:--";
    }

    function pad(n)
    {
      return (n < 10) ? "0" + n : n;
    }

    // round to nearest int
    seconds = Math.round(seconds);

    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60;

    return `${minutes}:${pad(remainingSeconds)}`;
  }

  handleSongClick(song)
  {
    if (song === null)
    {
      this.setSong(this.state.album.songs[0]);
    }

    const isSameSong = this.state.currentSong === song;
    if (this.state.isPlaying && isSameSong)
    {
      this.pause();
    }
    else
    {
      if (!isSameSong)
      {
        this.setSong(song);
      }
      this.play();
    }
  }

  handlePrevClick()
  {
    const currentIndex = this.state.album.songs.findIndex(
      song => this.state.currentSong === song
    );
    const newIndex = Math.max(0, currentIndex - 1);
    const newSong = this.state.album.songs[newIndex];

    this.setSong(newSong);
    this.play();
  }

  handleNextClick()
  {
    const currentIndex = this.state.album.songs.findIndex(
      song => this.state.currentSong === song
    );
    const newIndex = (currentIndex === this.state.album.songs.length - 1) ? 0 : (currentIndex + 1);
    const newSong = this.state.album.songs[newIndex];
    
    this.setSong(newSong);
    this.play();
  }

  handleTimeChange(e)
  {
    if (this.state.currentSong === null)
    {
      return;
    }

    const newTime = this.audioElement.duration * e.target.value;
    this.audioElement.currentTime = newTime;
    this.setState({
      currentTime: newTime
    })
  }

  handleVolumeChange(e)
  {
    const newVolume = e.target.value;
    this.audioElement.volume = newVolume;
    this.setState({
      volume: newVolume
    })
  }

  handleSongMouseEnter(song)
  {
    this.setState({
      hoveredSong: song
    });
  }

  handleSongMouseLeave(song)
  {
    this.setState({
      hoveredSong: null
    });
  }

  render()
  {
    return (
      <div>
        <Row tag="section" className="content album">
          <Col tag="section" xs="12" md="6" id="album-info" className="text-center">
            <img id="album-cover-art" className="img-fluid" src={this.state.album.albumCover} alt={this.state.album.title} />
            <div className="album-details">
              <h1 id="album-title">{this.state.album.title}</h1>
              <h2 className="artist">{this.state.album.artist}</h2>
              <div id="release-info">{this.state.album.releaseInfo}</div>
            </div>
          </Col>
          
          <Col xs="12" md="6" id="song-list-container">
            <table id="song-list">
              <colgroup>
                <col id="song-number-column" />
                <col id="song-title-column" />
                <col id="song-duration-column" />
              </colgroup>
              <thead>
                <tr>
                  <th>#</th>
                  <th>TITLE</th>
                  <th><span className="icon ion-md-time"></span></th>
                </tr>
              </thead>
              <tbody>
              {
                this.state.album.songs.map((song, index) => 
                  <tr className="song" key={index} 
                    onClick={() => this.handleSongClick(song)}
                    onMouseEnter={() => this.handleSongMouseEnter(song)}
                    onMouseLeave={() => this.handleSongMouseLeave(song)}>
                    <td>
                    {
                      (() => {
                        if (song === this.state.currentSong &&
                            this.state.isPlaying)
                        {
                          return <span className="icon ion-md-pause"></span>
                        }
                        else if ((song === this.state.currentSong &&
                                !this.state.isPlaying) ||
                                this.state.hoveredSong === song)
                        {
                          return <span className="icon ion-md-play"></span>
                        }
                        return index + 1
                      })()
                    }
                    </td>
                    <td>{song.title}</td>
                    <td>{this.formatTime(song.duration)}</td>
                  </tr>
                )
              }
              </tbody>
            </table>
          </Col>
        </Row>

        <PlayerBar 
          isPlaying={this.state.isPlaying} 
          currentSong={this.state.currentSong} 
          currentTime={this.state.currentTime}
          duration={this.state.duration}
          volume={this.state.volume}
          formatTime={(seconds) => this.formatTime(seconds)}
          handleSongClick={() => this.handleSongClick(this.state.currentSong)}
          handlePrevClick={() => this.handlePrevClick()}
          handleNextClick={() => this.handleNextClick()}
          handleTimeChange={(e) => this.handleTimeChange(e)}
          handleVolumeChange={(e) => this.handleVolumeChange(e)} 
        />
      </div>
    );
  }
}

export default Album;