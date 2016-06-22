import React, { Component } from 'react';
import Scene from './Scene';
import Cube from './Cube';
import Control from './Control';
import styles from '../styles/Main.scss';

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
      <div className={styles.wrapper}>
        <Scene
          {...this.state}
          panHorizon={panHorizon}
          orbitHorizon={orbitHorizon}>
          <Cube {...this.state}/>
        </Scene>
        <div className={styles.controls}>
          <Control
            label="Zoom"
            value={zoom}
            action={this.handleControlAction.bind(null, 'zoom')}
            min={100}
            max={1000}/>
          <Control
            label="Pan X"
            value={panX}
            action={this.handleControlAction.bind(null, 'panX')}
            min={0}
            max={100}/>
          <Control
            label="Pan Y"
            value={panY}
            action={this.handleControlAction.bind(null, 'panY')}
            min={0}
            max={100}/>
          <Control
            label="Rotate"
            value={zAngle}
            action={this.handleControlAction.bind(null, 'rotate')}
            min={0}
            max={360}/>
          <Control
            label="Orbit X"
            value={orbitX}
            action={this.handleControlAction.bind(null, 'orbitX')}
            min={0}
            max={90}/>
          <Control
            label="Orbit Y"
            value={orbitY}
            action={this.handleControlAction.bind(null, 'orbitY')}
            min={0}
            max={360}/>
        </div>
      </div>
    );
  }

  handleControlAction = (action, event) => {
    switch (action) {
      case 'zoom':
        this.setState({zoom: event.target.value});
        break;

      case 'panX':
        this.setState({panX: event.target.value});
        break;

      case 'panY':
        this.setState({panY: event.target.value});
        break;

      case 'rotate':
        this.setState({zAngle: event.target.value});
        break;

      case 'orbitX':
        this.setState({orbitX: event.target.value});
        break;

      case 'orbitY':
        this.setState({orbitY: event.target.value});
        break;

      default:
        this.setState({...this.state});
        break;
    }
  }
}
