import _ from 'lodash';
import { createStore, applyMiddleware } from 'redux';
import createReducer from './Reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


export default function configureStore(initialState = {}) {
  const store = createStore(
    createReducer(),
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );

  store.asyncReducers = {};
  return store;
}