import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './styles/global';
import { Home } from './pages/Home';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);