import React, { Component } from 'react';

require('normalize.css/normalize.css');
require('styles/App.scss');

export default class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 500,
      xOffset: 50,
      yOffset: 50
    };
    this.handleZoom = this.handleZoom.bind(this);
    this.handleXOffset = this.handleXOffset.bind(this);
    this.handleYOffset = this.handleYOffset.bind(this);
  }

  render() {
    const { zoom, xOffset, yOffset } = this.state;
    return (
      <div className="wrapper">
        <div
          className="scene"
          style={{
            perspective: `${zoom}px`,
            perspectiveOrigin: `${xOffset}% ${yOffset}%`,
            top: `${100 - yOffset}%`,
            left: `${xOffset}%`
          }}>
          <div
            className="cube">
            <div className="face front"/>
            <div className="face back"/>
            <div className="face left"/>
            <div className="face right"/>
            <div className="face top"/>
            <div className="face bottom"/>
          </div>
        </div>
        <div className="controls">
          <div>
            <label>Zoom</label>
            <input
              type="range"
              defaultValue={zoom}
              onChange={this.handleZoom}
              min="100"
              max="1000"/>
          </div>
          <div>
            <label>X-axis offset</label>
            <input
              type="range"
              defaultValue={xOffset}
              onChange={this.handleXOffset}
              min="0"
              max="100"/>
          </div>
          <div>
            <label>Horizon height</label>
            <input
              type="range"
              defaultValue={yOffset}
              onChange={this.handleYOffset}
              min="0"
              max="100"/>
          </div>
        </div>
      </div>
    );
  }

  handleZoom(event) {
    this.setState({zoom: event.target.value});
  }

  handleXOffset(event) {
    this.setState({xOffset: event.target.value});
  }

  handleYOffset(event) {
    this.setState({yOffset: event.target.value});
  }
}

AppComponent.defaultProps = {
};
