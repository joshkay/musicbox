import React, { Component } from 'react';

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
      volumeClass = "ion ion-md-volume-mute";
    }
    else if (this.props.volume < 0.7)
    {
      volumeClass = "ion ion-md-volume-low";
    }
    else
    {
      volumeClass = "ion ion-md-volume-high";
    }

    return (
      <footer className="sticky-footer player-bar row">
        <section id="buttons" className="col-12 col-md-3 text-center">
          <button id="previous" className="player-bar-button" onClick={this.props.handlePrevClick}>
            <span className="ion ion-md-skip-backward"></span>
          </button>
          <button id="play-pause" className="player-bar-button" onClick={this.props.handleSongClick}>
            <span className={this.props.isPlaying ? "ion ion-md-pause" : "ion ion-md-play"}></span>
          </button>
          <button id="next" className="player-bar-button" onClick={this.props.handleNextClick}>
            <span className="ion ion-md-skip-forward"></span>
          </button>
        </section>

        <section id="time-control" className="col-12 col-md-6 text-center">
          {
            timeControl
          }
        </section>

        <section id="volume-control" className="col-12 col-md-3 text-center">
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
        </section>
      </footer>
    );
  }
}

export default PlayerBar;