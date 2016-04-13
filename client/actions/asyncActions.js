export const ASYNC_REQUEST = 'ASYNC_REQUEST';
export const ASYNC_RECEIVE = 'ASYNC_RECEIVE';
export const ASYNC_FAILED = 'ASYNC_FAILED';

export function asyncRequest() {
  return {
    type: ASYNC_REQUEST
  };
}

export function asyncReceived(data) {
  return {
    type: ASYNC_RECEIVE,
    data
  };
}

export function asyncFailed() {
  return {
    type: ASYNC_FAILED
  };
}

export function getNewData() {
  return dispatch => {
    dispatch(asyncRequest());

    setTimeout(() => {
      fetch('http://yesno.wtf/api/')
        .then(response => response.json())
        .then(json => dispatch(asyncReceived(json)))
        .catch(() => dispatch(asyncFailed()));
    }, 500);
  };
}
