// Importing React and ReactDOM
import React from 'react'
import ReactDOM from 'react-dom'

import * as serviceWorker from './serviceWorker';

// Importing redux react-redux and router
import {BrowserRouter} from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'

// Importing Middlewares
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import reducer from "./client/store/reducers"
import App from "./client/containers/App"

import 'bootstrap/dist/css/bootstrap.css'

const loggerMiddleware = createLogger();

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
