import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import OtherApp from "./otherApp.js"
import App from './App.js';
import * as serviceWorker from './serviceWorker';

//JSX
//ReactDOM.render(<div><h1>Mike woz ere</h1></div>,
// document.getElementById('root')
//);

//JSX - replace App with otherApp
ReactDOM.render(<App/>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.Fragment>
//     <OtherApp />
//   </React.Fragment>,
//   document.getElementById('OtherApp')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
