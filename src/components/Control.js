import React, { PropTypes } from 'react';


const Control = (props) =>
  <div className="control">
    <label>{props.label}</label>
    <input
      type="range"
      value={props.value}
      onChange={props.action}
      min={props.min}
      max={props.max}/>
    <input
      type="number"
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
