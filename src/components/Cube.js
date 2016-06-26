import React, { PropTypes } from 'react';
import styles from '../styles/Cube.scss';

const Primative = (props) => {
  const className = props.anaglyph ? styles.anaglyphCube : styles.cube;
  const style = {
    transform: `translate3d(-50%, -50%, 0) rotateX(-${props.orbitX}deg) rotateY(${props.zAngle}deg) rotateZ(${props.orbitY}deg)`
  };
  
  return (
    <div
      className={className}
      style={style}>
      <div className={styles.frontFace}/>
      <div className={styles.backFace}/>
      <div className={styles.leftFace}/>
      <div className={styles.rightFace}/>
      <div className={styles.topFace}/>
      <div className={styles.bottomFace}/>
    </div>
  );
}


const Cube = (props) =>
  <div className={styles.cubes}>
    <div className={props.anaglyph && styles.anaglyphLeft}>
      <Primative {...props}/>
    </div>
    {props.anaglyph &&
      <div className={props.anaglyph && styles.anaglyphRight}>
        <Primative {...props}/>
      </div>}
  </div>

Cube.propTypes = {
  orbitX: PropTypes.number,
  zAngle: PropTypes.number,
  orbitY: PropTypes.number,
  anaglyph: PropTypes.bool
};

export default Cube;
