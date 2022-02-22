import React, { useState } from "react";
import useRoundFinal from "./RoundFinal.hook";
import Players from "../../Players";

import Card from "../../Card/Card";
import Fullscreen from "../../Layouts/Fullscreen";

const RoundFinal = () => {
  const { mainCard, winnerCard, clearMatchup, players, startRound, isCleared } =
    useRoundFinal();

  return (
    <Fullscreen>
      {mainCard && winnerCard ? (
        <h1>Najlepsza karta</h1>
      ) : (
        <h1>Oczekiwanie na wybór lidera</h1>
      )}
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
          }, 5000)
        : null}
      {isCleared
        ? setTimeout(() => {
            startRound();
          }, 7000)
        : null}
    </Fullscreen>
  );
};

export default RoundFinal;
