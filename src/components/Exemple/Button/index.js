import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {};

export default Button;
