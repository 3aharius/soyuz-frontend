import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger }  from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import reducer from 'reducers';
import DevTools from 'config/devtools';

import ActionType from 'actions/actionType';
import reDispatchMiddleware from 'config/reDispatchMiddleware';
import fetchDefaultDataProducer from 'producers/fetchDefaultDataProducer';

const middlewares = process.env.NODE_ENV === 'development' ?
  [
    applyMiddleware(promise(), thunk, createLogger(), reDispatchMiddleware(fetchDefaultDataProducer)),
    DevTools.instrument(),
  ] :
  [
    applyMiddleware(promise(), thunk, createLogger(), reDispatchMiddleware(fetchDefaultDataProducer)),
  ];

export default (initialState = {}) => {
  const store = createStore(reducer, initialState, compose(...middlewares));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('reducers', () => {
      const nextReducer = require('reducers');
      store.replaceReducer(nextReducer);
    });
  }
  return store;
};
