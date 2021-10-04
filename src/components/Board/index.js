import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "../Card";
import { PartyContext } from "../Contexts/party-context";
// import { resetColor, shuffle } from "../../utils";

const Board = ({ setstateCards, score, setScore }) => {
  const cardsContext = React.useContext(PartyContext);
  const [selectedCards, setSelectedCards] = useState([]);

  const handleClick = (card) => {
    // if card already colored stop execution
    console.log(card);
    if (card.toggle) {
      return;
    }

    if (selectedCards.length < 2 && !selectedCards.includes(card)) {
      selectedCards.push(card);
      document.getElementById(`card-${card.id}`).style.backgroundColor =
        card.color;
      // ? Permet d'ajouter de la difficulté
      // if (card.color === "black") {
      //   const looseMessage = document.getElementById("lose-message");
      //   looseMessage.style.visibility = "visible";
      //   setTimeout(() => {
      //     resetColor(cardsContext);
      //     // cardsContext.map((card) => card.toggle && (card.toggle = false));
      //     setstateCards(shuffle(cardsContext));
      //     setScore(0);
      //     setSelectedCards([]);
      //     looseMessage.style.visibility = "hidden";
      //   }, 800);
      //   return;
      // }
    } else if (selectedCards.includes(card)) {
      setSelectedCards([]);
      document.getElementById(`card-${card.id}`).style.backgroundColor =
        "#e8caff";
    }

    // If two cards are selected compare them
    console.log(selectedCards.length);
    if (selectedCards.length === 2) {
      const isSameColor = selectedCards.every(
        (element) => element.color === card.color
      );

      if (isSameColor) {
        const copy = [...cardsContext];
        copy.map((cardCopy) =>
          selectedCards.map(
            (selectedCard) =>
              cardCopy.id === selectedCard.id && (cardCopy.toggle = true)
          )
        );

        setstateCards(copy);
        setScore(score + 1);
      } else {
        // If cards colors are different remove selected cards
        selectedCards.map((selectedCard) => {
          const currentCard = document.getElementById(
            `card-${selectedCard.id}`
          );
          if (currentCard) {
            setTimeout(() => {
              currentCard.style.backgroundColor = "#e8caff";
            }, 800);
          }

          return currentCard;
        });
      }
      setSelectedCards([]);
    }
  };

  return (
    <>
      <h1
        id="lose-message"
        style={{ textAlign: "center", color: "red", visibility: "hidden" }}>
        Perdu !
      </h1>
      <div className="container">
        {cardsContext.map((card) => (
          <Card setstateCards={() => handleClick(card)} id={card.id} />
        ))}
      </div>
    </>
  );
};

Board.propTypes = {
  setstateCards: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
};

// export const MemoBoard = React.memo(Board);
export default Board;
