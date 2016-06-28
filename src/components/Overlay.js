import React, { Component } from 'react';
import styles from '../styles/Overlay.scss';

export default class Overlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }

  render() {
    if (this.state.show) {
      return (
        <div className={styles.overlay} onClick={this.toggleModal}>
          <div className={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      );
    } else {
      return false;
    }
  }

  toggleModal = () => {
    this.setState({show: !this.state.show});
  }
}
