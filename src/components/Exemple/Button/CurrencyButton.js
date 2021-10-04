import React from "react";
import PropTypes from "prop-types";
import Button from ".";

const CurrencyButton = ({ currencies, onChange }) => {
  return Object.keys(currencies).map((item) => (
    <Button onClick={() => onChange(item)}>{item}</Button>
  ));
};

CurrencyButton.propTypes = {};

export default CurrencyButton;
