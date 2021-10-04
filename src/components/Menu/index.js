import React from "react";
import PropTypes from "prop-types";

// Components
import Button from "../Button";

// Cards datas
import { cards } from "../App/datas";

// Context
import { PartyContext } from "../Contexts/party-context";
import { resetColor, shuffle } from "../../utils";

const Menu = ({ setstateCards, setScore }) => {
  const cardsInit = React.useContext(PartyContext);

  const actionButtons = [
    {
      name: "- 2 cartes",
      color: "red",
      onClick: () => {
        if (cardsInit.length > 4) {
          const removeLast = [...cardsInit];
          const lastCard = removeLast.pop();
          const updateCards = removeLast.filter(
            (card) => card.color !== lastCard.color
          );
          setstateCards(shuffle(updateCards));
        }
      },
    },
    {
      name: "Rejouer",
      color: "red",
      onClick: () => {
        resetColor(cardsInit);
        setstateCards(shuffle(cards));
        setScore(0);
      },
    },
    {
      name: "+ 2 cartes",
      color: "red",
      onClick: () => {
        if (
          cardsInit.length < 12 &&
          !cardsInit.some((element) => element.toggle)
        ) {
          const getRandomColor = () => {
            var letters = "0123456789ABCDEF";
            var color = "#";
            for (var i = 0; i < 6; i++) {
              color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
          };
          const color = getRandomColor();
          const createId = Date.now();
          const newCard1 = {
            id: createId,
            color: color,
            toggle: false,
          };
          const newCard2 = {
            id: createId + Math.floor(Math.random() * 99),
            color: color,
            toggle: false,
          };
          const newCards = [...cardsInit, newCard1, newCard2];

          setstateCards(shuffle(newCards));
        }
      },
    },
  ];
  return (
    <div className="menu">
      {actionButtons.map((button) => (
        <Button onClick={button.onClick}>{button.name}</Button>
      ))}
    </div>
  );
};

Menu.propTypes = {
  setstateCards: PropTypes.func.isRequired,
  setScore: PropTypes.func.isRequired,
};

export default Menu;
