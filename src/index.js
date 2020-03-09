// Polyfills for IE. https://reactjs.org/docs/javascript-environment-requirements.html
import 'core-js/es/map';
import 'core-js/es/set';
import React from 'react';
import ReactDOM from 'react-dom';
import Example from './Example';

ReactDOM.render(<Example />, document.getElementById('root'));

