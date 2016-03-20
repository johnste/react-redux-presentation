import { combineReducers } from 'redux';
import { COUNTER_COUNT, COUNTER_INCREMENT, COUNTER_DECREMENT } from '../actions/counterActions';
import async from './async'

function counter(state = { count: 0, delta: 1 }, action) {
  switch (action.type) {
    case COUNTER_COUNT:
      return { ...state, count: state.count + state.delta };
    case COUNTER_INCREMENT:
      return { ...state, delta: state.delta + 1 };
    case COUNTER_DECREMENT:
      return { ...state, delta: state.delta - 1 };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  counter,
  async
});

export default rootReducer;
