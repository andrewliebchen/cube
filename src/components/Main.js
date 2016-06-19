require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="cube">
          <div className="face front"/>
          <div className="face back"/>
          <div className="face left"/>
          <div className="face right"/>
          <div className="face top"/>
          <div className="face bottom"/>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
