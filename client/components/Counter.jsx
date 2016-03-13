import React, { PropTypes } from 'react';

const Counter = ({ count, delta }) => {
  return <div>count: { count }, delta: { delta }</div>;
};

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  delta: PropTypes.number.isRequired
};

export default Counter;
