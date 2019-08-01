import { fromJS } from 'immutable';

const homeInitState = fromJS({
  loading: true,
  data: []
})

const HomeReducer = (state = homeInitState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default HomeReducer;