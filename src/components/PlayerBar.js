import React, { Component } from 'react';

class PlayerBar extends Component
{
  render()
  {
    return (
      <section className="player=bar">
        <section id="buttons">
          <button id="previous" onClick={this.props.handlePrevClick}>
            <span className="ion ion-md-skip-backward"></span>
          </button>
          <button id="play-pause" onClick={this.props.handleSongClick}>
            <span className={this.props.isPlaying ? "ion ion-md-pause" : "ion ion-md-play"}></span>
          </button>
          <button id="next" onClick={this.props.handleNextClick}>
            <span className="ion ion-md-skip-forward"></span>
          </button>
          <section id="time-control">
            <div className="current-time">{this.props.currentTime}</div>
            <input 
              type="range" 
              className="seek-bar"
              value={(this.props.currentTime / this.props.duration) || 0}
              max="1"
              min="0"
              step="0.01"
              onChange={this.props.handleTimeChange}
            />
            <div className="total-time">{this.props.duration || 0}</div>
          </section>
          <section id="volume-control">
            <span className="ion ion-md-volume-low"></span>
            <input type="range" className="seek-bar" value="80" />
            <span className="ion ion-md-volume-high"></span>
          </section>
        </section>
      </section>
    );
  }
}

export default PlayerBar;