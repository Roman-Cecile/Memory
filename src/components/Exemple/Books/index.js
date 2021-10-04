import React from "react";
import Book from "../Book";
import CurrencyButton from "../Button/CurrencyButton";
import { CurrencyContext } from "../Contexts/currency-context";

const currencies = {
  euro: "€",
  dollar: "$",
};

const Books = ({ list }) => {
  const [currency, setCurrency] = React.useState(currencies.euro);
  return (
    <>
      {/* Avec value="€" je set le context des enfants de ce CurrencyContext en euro */}
      <CurrencyButton currencies={currencies} onChange={setCurrency} />
      <CurrencyContext.Provider value={currency}>
        <ul>
          {list.map((item) => (
            <Book key={item.id} item={item} />
          ))}
        </ul>
      </CurrencyContext.Provider>
      {/* Avec value="$" je set le context des enfants de ce CurrencyContext en dollar */}
      {/* <CurrencyContext.Provider value="$">
        <ul>
          {list.map((item) => (
            <Book key={item.id} item={item} />
          ))}
        </ul>
      </CurrencyContext.Provider> */}
    </>
  );
};

Books.propTypes = {};

export default Books;
