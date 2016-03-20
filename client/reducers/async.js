import { ASYNC_REQUEST, ASYNC_FAILED, ASYNC_RECEIVE } from '../actions/asyncActions';

export default function async(state = {
	isFetching: false,
	isError: false,
	data: undefined
}, action) {

	switch(action.type) {
		case ASYNC_REQUEST:
			return { ...state, isFetching: true };

		case ASYNC_FAILED:
			return { ...state, isFetching: false,
        isError: true};

		case ASYNC_RECEIVE:
			return { ...state, isFetching: false,
        isError: false, data: action.data};

    default:
      return state;
	}
}
