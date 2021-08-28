import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../src/scss/base.scss'
import Login from "./common/login/login";
import Route1 from "./common/router/router-2";
import reportWebVitals from './reportWebVitals';
import FrontendAuth from "./common/router/FrontendAuth";

ReactDOM.render(
  <React.StrictMode>
    <Route1 />
  </React.StrictMode>,
  document.getElementById(
      'root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
