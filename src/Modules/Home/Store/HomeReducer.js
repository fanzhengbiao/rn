import { fromJS } from 'immutable';
import { HOME_GET_LIST } from './HomeActions';

const homeInitState = fromJS({
  loading: true,
  list: []
})

const HomeReducer = (state = homeInitState, action) => {
  switch (action.type) {
    case HOME_GET_LIST: {
      return state.set('list', fromJS(action.list))
                  .set('loading', false);
    }
    default:
      return state;
  }
}

export default HomeReducer;