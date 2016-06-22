import React, { PropTypes } from 'react';

const Cube = (props) =>
  <div
    className="cube"
    style={{transform: `rotateX(-${props.orbitX}deg) rotateY(${props.zAngle}deg) rotateZ(${props.orbitY}deg)`}}>
    <div className="face front"/>
    <div className="face back"/>
    <div className="face left"/>
    <div className="face right"/>
    <div className="face top"/>
    <div className="face bottom"/>
  </div>

Cube.propTypes = {
  orbitX: PropTypes.number,
  zAngle: PropTypes.number,
  orbitY: PropTypes.number
};

export default Cube;
