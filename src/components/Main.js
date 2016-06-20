import React, { Component } from 'react';

require('normalize.css/normalize.css');
require('styles/App.scss');

export default class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 500,
      xOffset: 50,
      yOffset: 50,
      zAngle: 0
    };
    this.handleZoom = this.handleZoom.bind(this);
    this.handleXOffset = this.handleXOffset.bind(this);
    this.handleYOffset = this.handleYOffset.bind(this);
    this.handleRotate = this.handleRotate.bind(this);
    this.handleOrbitX = this.handleOrbitX.bind(this);
    this.handleOrbitY = this.handleOrbitY.bind(this);
  }

  render() {
    const { zoom, xOffset, yOffset, zAngle, orbitX, orbitY } = this.state;
    const horizon = `${100 - yOffset}%`;
    return (
      <div className="wrapper">
        <div
          className="scene"
          style={{
            perspective: `${zoom}px`,
            perspectiveOrigin: `${xOffset}% ${yOffset}%`,
            top: horizon,
            left: `${xOffset}%`,
            orbitX: 0,
            orbitY: 0
          }}>
          <div
            className="cube"
            style={{transform: `rotateX(${orbitX}deg) rotateY(${zAngle}deg) rotateZ(${orbitY}deg)`}}>
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
          <div>
            <label>Rotate</label>
            <input
              type="range"
              defaultValue={zAngle}
              onChange={this.handleRotate}
              min="0"
              max="360"/>
          </div>
          <div>
            <label>Orbit X</label>
            <input
              type="range"
              defaultValue={orbitX}
              onChange={this.handleOrbitX}
              min="0"
              max="360"/>
          </div>
          <div>
            <label>Orbit Y</label>
            <input
              type="range"
              defaultValue={orbitY}
              onChange={this.handleOrbitY}
              min="0"
              max="360"/>
          </div>
        </div>
        <div className="horizon" style={{top: horizon}}/>
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

  handleRotate(event) {
    this.setState({zAngle: event.target.value});
  }

  handleOrbitX(event) {
    this.setState({orbitX: event.target.value});
  }

  handleOrbitY(event) {
    this.setState({orbitY: event.target.value});
  }
}

AppComponent.defaultProps = {
};
