import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import { createGlobalStyle } from 'styled-components';
import combineReducers from './reducers';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Indie Flower', cursive;
  }
`

const store = createStore(combineReducers)

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
