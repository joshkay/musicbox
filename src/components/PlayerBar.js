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
          <button id="next">
            <span className="ion ion-md-skip-forward"></span>
          </button>
          <section id="time-control">
            <div className="current-time">-:--</div>
            <input type="range" className="seek-bar" value="80" />
            <div className="total-time">-:--</div>
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