import React, { useEffect } from "react";
import useRoundFinal from "./RoundFinal.hook";
import Players from "../../Players";

import Card from "../../Card/Card";
import Fullscreen from "../../Layouts/Fullscreen";

const TimeoutComponent = ({ action, time }) => {
  useEffect(() => {
    let timeoutId;
    timeoutId = setTimeout(() => {
      action();
    }, time);
    return () => {
      if (typeof timeoutId !== "undefined") {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return null;
};

/*
 * Final components of Round, where the winner of round is show
 */
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
      {mainCard && winnerCard ? (
        <TimeoutComponent action={clearMatchup} time={8000} />
      ) : null}
      {isCleared ? <TimeoutComponent action={startRound} time={9000} /> : null}
    </Fullscreen>
  );
};

export default RoundFinal;
