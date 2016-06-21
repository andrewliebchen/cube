import React, { Component } from 'react';

require('normalize.css/normalize.css');
require('styles/App.scss');

class Scene extends Component {
  render() {
    const { children, zoom, panX, panY, panHorizon, orbitHorizon, orbitY} = this.props;
    const sceneStyle = {
      perspective: `${zoom}px`,
      perspectiveOrigin: `${panX}% ${panY}%`,
      top: `${panHorizon}%`,
      left: `${panX}%`
    };
    // Horizon angle gets messed up when orbitX is set > 0
    const horizonStyle = {
      top: `${panHorizon + orbitHorizon - 50}%`,
      transform: `rotate(${orbitY}deg)`
    };
    return (
      <span>
        <div
          className="scene"
          style={sceneStyle}>
          {children}
        </div>
        <div className="horizon" style={horizonStyle}/>
      </span>
    );
  }
}

class Cube extends Component {
  render() {
    const { orbitX, orbitY, zAngle} = this.props;
    return (
      <div
        className="cube"
        style={{transform: `rotateX(-${orbitX}deg) rotateY(${zAngle}deg) rotateZ(${orbitY}deg)`}}>
        <div className="face front"/>
        <div className="face back"/>
        <div className="face left"/>
        <div className="face right"/>
        <div className="face top"/>
        <div className="face bottom"/>
      </div>
    );
  }
}

class Control extends Component {
  render() {
    const { label, value, action, min, max } = this.props;
    return (
      <div className="control">
        <label>{label}</label>
        <input
          type="range"
          value={value}
          onChange={action}
          min={min}
          max={max}/>
        <input
          type="number"
          value={value}
          onChange={action}
          min={min}
          max={max}/>
      </div>
    );
  }
}

export default class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 500,
      panX: 50,
      panY: 50,
      zAngle: 0,
      orbitX: 0,
      orbitY: 0
    };
  }

  render() {
    const { zoom, panX, panY, zAngle, orbitX, orbitY } = this.state;
    const orbitHorizon = (100 - orbitX / 180 * 100) - 50;
    const panHorizon = 100 - panY;
    return (
      <div className="wrapper">
        <Scene
          zoom={zoom}
          panX={panX}
          panY={panY}
          panHorizon={panHorizon}
          orbitHorizon={orbitHorizon}
          orbitY={orbitY}>
          <Cube
            orbitX={orbitX}
            orbitY={orbitY}
            zAngle={zAngle}/>
        </Scene>
        <div className="controls">
          <Control
            label="Zoom"
            value={zoom}
            action={this.handleZoom}
            min="100"
            max="1000"/>
          <Control
            label="Pan X"
            value={panX}
            action={this.handlePanX}
            min="0"
            max="100"/>
          <Control
            label="Pan Y"
            value={panY}
            action={this.handlePanY}
            min="0"
            max="100"/>
          <Control
            label="Rotate"
            value={zAngle}
            action={this.handleRotate}
            min="0"
            max="360"/>
          <Control
            label="Orbit X"
            value={orbitX}
            action={this.handleOrbitX}
            min="0"
            max="90"/>
          <Control
            label="Orbit Y"
            value={orbitY}
            action={this.handleOrbitY}
            min="0"
            max="360"/>
        </div>
      </div>
    );
  }

  handleZoom = (event) => {
    this.setState({zoom: event.target.value});
  }

  handlePanX = (event) => {
    this.setState({panX: event.target.value});
  }

  handlePanY = (event) => {
    this.setState({panY: event.target.value});
  }

  handleRotate = (event) => {
    this.setState({zAngle: event.target.value});
  }

  handleOrbitX = (event) => {
    this.setState({orbitX: event.target.value});
  }

  handleOrbitY = (event) => {
    this.setState({orbitY: event.target.value});
  }
}

AppComponent.defaultProps = {
};
