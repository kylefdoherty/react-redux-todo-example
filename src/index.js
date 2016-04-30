import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducers';
import App from './App';

const  store = createStore(todoApp);

const rootElement = document.getElementById('root');
render(
  <Provider store={ store }>
    <App />
  </Provider>,
  rootElement
)
