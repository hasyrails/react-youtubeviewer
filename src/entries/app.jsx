import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '~/routings/App';
import GlobalStyle from '~/style/GlobalStyle'; 

const rootEl = document.getElementById('root');

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  rootEl,
);
