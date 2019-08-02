import { createSelector } from 'reselect';
export const HOME_KEY = 'home';
const reducerLoading = state => state[HOME_KEY].get('loading');
const reducerList = state => state[HOME_KEY].get('list');


export const makeSelectLoading = createSelector(reducerLoading, loading => loading);
export const makeSelectList = createSelector(reducerList, list => list ? list.toJS() : []);

