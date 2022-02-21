import React, { useState } from "react";
import useRoundStart from "./RoundStart.hook";
import { useSelector } from "react-redux";
import Players from "../../Players";

import Card from "../../Card/Card";
import useGameStageWaiting from "../GameStageWaiting/GameStageWaiting.hook";
import Fullscreen from "../../Layouts/Fullscreen";

const RoundStart = () => {
  const { getRoundName, startLeaderChooseCard } = useRoundStart();
  const { players } = useGameStageWaiting();
  // const answerCards = useSelector((state) => state.game.answerCards);

  // const [selectedCard, setSelectedCard] = useState(null);
  // const [isCardSelected, setIsCardSelected] = useState(false);

  return (
    <Fullscreen>
      <h1>Runda {getRoundName()}</h1>
      {players ? <Players players={players} /> : null}
      {setTimeout(() => {
        startLeaderChooseCard();
      }, 10000)}
      {/* /*{</Fullscreen>{{mainCard ? (
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
            console.log("wywowalo sie tutaj");
            clearMatchup();
            startLeaderChooseCard();
          }, 20000)
        : null} */}
    </Fullscreen>
  );
};

export default RoundStart;
