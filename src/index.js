import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import styles from './styles/Global.scss';

require('normalize.css/normalize.css');

// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));
