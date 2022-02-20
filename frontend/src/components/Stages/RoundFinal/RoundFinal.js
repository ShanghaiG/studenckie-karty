import React, { useState } from "react";
import useRoundFinal from "./RoundFinal.hook";
import { useSelector } from "react-redux";
import Players from "../../Players";

import Card from "../../Card/Card";
import useGameStageWaiting from "../GameStageWaiting/GameStageWaiting.hook";
import Fullscreen from "../../Layouts/Fullscreen";

const RoundFinal = () => {
  const { mainCard, winnerCard } = useRoundFinal();
  const { players } = useGameStageWaiting();
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
    </Fullscreen>
  );
};

export default RoundFinal;
