/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";

// Cards datas
import { cards } from "./datas";

// Context
import { PartyContext } from "../Contexts/party-context";

// Components
// import { MemoBoard } from "../Board";
import Board from "../Board";
import Menu from "../Menu";
import { shuffle } from "../../utils";

const App = () => {
  const [stateCards, setstateCards] = useState(shuffle(cards));
  const [score, setScore] = useState(0);

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Joue au Memory !</h3>
      <p style={{ textAlign: "center" }}>
        Score: {score}/{stateCards.length / 2}
      </p>
      <h1
        style={{
          visibility: score === stateCards.length / 2 ? "visible" : "hidden",
          textAlign: "center",
          color: "green",
        }}>
        BRAVO !
      </h1>
      <PartyContext.Provider value={stateCards}>
        {/* <MemoBoard stateCards={stateCards} setstateCards={setstateCards} /> */}
        <Board
          score={score}
          setScore={setScore}
          setstateCards={setstateCards}
        />
        <Menu setScore={setScore} setstateCards={setstateCards} />
      </PartyContext.Provider>
    </div>
  );
};

App.propTypes = {};

export default App;
