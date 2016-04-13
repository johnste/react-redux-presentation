import React, { PropTypes } from 'react';

const Counter = ({ count, delta }) => {
  return (
    <div>
      <p>count: { count }</p>
      <p>delta: { delta }</p>
    </div>
  );
};

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  delta: PropTypes.number.isRequired
};

export default Counter;
