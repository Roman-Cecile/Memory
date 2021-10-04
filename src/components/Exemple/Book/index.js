import React from "react";
import { CurrencyContext } from "../Contexts/currency-context";

const Book = ({ item }) => {
  const currency = React.useContext(CurrencyContext);
  return (
    <li>
      {item.title} - {item.price} {currency}
    </li>
  );
};

Book.propTypes = {};

export default Book;
