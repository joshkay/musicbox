import React, { Component } from 'react';

import { Row, Col } from 'reactstrap';

import './PlayerBar.css';

class PlayerBar extends Component
{
  render()
  {
    let timeControl;
    if (this.props.currentSong != null)
    {
      timeControl = (
        <div>
          <span className="current-time">{this.props.formatTime(this.props.currentTime)}</span>
          <input 
            type="range" 
            className="seek-bar form-control-range"
            value={(this.props.currentTime / this.props.duration) || 0}
            max="1"
            min="0"
            step="0.01"
            onChange={this.props.handleTimeChange}
          />
          <span className="total-time">{this.props.formatTime(this.props.duration)}</span>
        </div>
      );
    }

    let volumeClass;
    if (this.props.volume < 0.05)
    {
      volumeClass = "icon ion-md-volume-mute";
    }
    else if (this.props.volume < 0.7)
    {
      volumeClass = "icon ion-md-volume-low";
    }
    else
    {
      volumeClass = "icon ion-md-volume-high";
    }

    return (
      <Row tag="footer" className="text-center sticky-footer player-bar">
        <Col tag="section" xs="12" md="3" id="buttons">
          <button id="previous" className="player-bar-button" onClick={this.props.handlePrevClick}>
            <span className="icon ion-md-skip-backward"></span>
          </button>
          <button id="play-pause" className="player-bar-button" onClick={this.props.handleSongClick}>
            <span className={this.props.isPlaying ? "icon ion-md-pause" : "icon ion-md-play"}></span>
          </button>
          <button id="next" className="player-bar-button" onClick={this.props.handleNextClick}>
            <span className="icon ion-md-skip-forward"></span>
          </button>
        </Col>

        <Col tag="section" xs="12" md="6" id="time-control">
          {
            timeControl
          }
        </Col>

        <Col tag="section" xs="12" md="3" id="volume-control">
          <span id="volume-indicator" className={volumeClass}></span>
          <input 
            type="range"
            className="seek-bar"
            value={this.props.volume}
            max="1"
            min="0"
            step="0.01"
            onChange={this.props.handleVolumeChange}
          />
        </Col>
      </Row>
    );
  }
}

export default PlayerBar;