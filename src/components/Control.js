import React, { PropTypes } from 'react';
import styles from '../styles/Control.scss';

const Control = (props) =>
  <div className={styles.control}>
    <label className={styles.label}>{props.label}</label>
    <input
      type="number"
      className={styles.input}
      value={props.value}
      onChange={props.action}
      min={props.min}
      max={props.max}/>
    <input
      type="range"
      className={styles.range}
      value={props.value}
      onChange={props.action}
      min={props.min}
      max={props.max}/>
  </div>

Control.propTypes = {
  label: PropTypes.string,
  value:  PropTypes.number,
  action: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number
}

export default Control;
