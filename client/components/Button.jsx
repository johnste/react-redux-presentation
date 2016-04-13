import React, { PropTypes } from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button className="button" onClick={ onClick }>
      { children }
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Button;
