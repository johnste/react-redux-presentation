import React, { PropTypes } from 'react';

const Button = ({ onClick, children }) => {
  return <button onClick={ onClick }>{ 'knapp' }{ children }</button>;
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Button;
