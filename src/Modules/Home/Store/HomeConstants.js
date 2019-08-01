import { createSelector } from 'reselect';
export const HOME_KEY = 'home';
const reducerLoading = state => state[HOME_KEY].get('loading');


export const makeSelectLoading = createSelector(reducerLoading, loading => loading);

