import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import UserReducer from './UserRedux/UserReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const persistConfig = {
  key: 'token',
  storage: storage,
  whitelist: ['userdata','token'] // which reducer want to store
};

const pReducer = persistReducer(persistConfig, UserReducer);
const middleware = applyMiddleware(thunk);
const store = createStore(pReducer, composeWithDevTools(middleware));
const persistor = persistStore(store);

export { persistor, store };