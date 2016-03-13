import { combineReducers } from 'redux';
import { COUNTER_COUNT, COUNTER_INCREMENT, COUNTER_DECREMENT } from '../actions/counterActions';

function counter(state = { count: 0, delta: 1 }, action) {
  switch (action.type) {
    case COUNTER_COUNT:
      return Object.assign({}, state, { count: state.count + state.delta });
    case COUNTER_INCREMENT:
      return Object.assign({}, state, { delta: state.delta + 1 });
    case COUNTER_DECREMENT:
      return Object.assign({}, state, { delta: state.delta - 1 });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  counter
});

export default rootReducer;
