import React, { useState } from "react";
import useRoundFinal from "./RoundFinal.hook";
import { useSelector } from "react-redux";
import Players from "../../Players";

import Card from "../../Card/Card";
import useGameStageWaiting from "../GameStageWaiting/GameStageWaiting.hook";
import Fullscreen from "../../Layouts/Fullscreen";

const RoundFinal = () => {
  const { mainCard, winnerCard, clearMatchup, round } = useRoundFinal();
  const { players, startRound } = useGameStageWaiting();
  // const answerCards = useSelector((state) => state.game.answerCards);

  // const [selectedCard, setSelectedCard] = useState(null);
  // const [isCardSelected, setIsCardSelected] = useState(false);

  return (
    <Fullscreen>
      <h1>Najlepsza karta</h1>
      {players ? <Players players={players} /> : null}
      {mainCard ? (
        <div className={"mainCardEnd"}>
          <Card data={mainCard} size={"large"} />
        </div>
      ) : null}
      {winnerCard ? (
        <div className={"mainCardEnd"}>
          <Card data={winnerCard} size={"large"} />
        </div>
      ) : null}
      {mainCard && winnerCard
        ? setTimeout(() => {
            clearMatchup();
            startRound(round + 1);
          }, 8000)
        : null}
    </Fullscreen>
  );
};

export default RoundFinal;
