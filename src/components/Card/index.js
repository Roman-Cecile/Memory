import React from "react";

const Card = ({ id, setstateCards }) => {
  return (
    <div
      onClick={setstateCards}
      className="card"
      id={`card-${id}`}
      style={{ backgroundColor: "#e8caff" }}
    />
  );
};

Card.propTypes = {};

export default Card;
