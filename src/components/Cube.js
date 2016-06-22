import React, { PropTypes } from 'react';
import styles from '../styles/Cube.scss';

const Cube = (props) =>
  <div
    className={styles.cube}
    style={{transform: `rotateX(-${props.orbitX}deg) rotateY(${props.zAngle}deg) rotateZ(${props.orbitY}deg)`}}>
    <div className={styles.frontFace}/>
    <div className={styles.backFace}/>
    <div className={styles.leftFace}/>
    <div className={styles.rightFace}/>
    <div className={styles.topFace}/>
    <div className={styles.bottomFace}/>
  </div>

Cube.propTypes = {
  orbitX: PropTypes.number,
  zAngle: PropTypes.number,
  orbitY: PropTypes.number
};

export default Cube;
