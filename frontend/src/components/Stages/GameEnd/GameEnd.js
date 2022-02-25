import React, { useEffect } from "react";
import useGameEnd from "./GameEnd.hook";
import Players from "../../Players";
import Fullscreen from "../../Layouts/Fullscreen";
import { Player } from "../../Players/Players";

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

const GameEnd = () => {
  const { winner, endGame } = useGameEnd();

  return (
    <Fullscreen>
      <h1>Zwycięzcą zostaje</h1>
      {winner ? <Player player={winner} side={null} size={"large"} /> : null}
      {winner ? <TimeoutComponent action={endGame} time={20000} /> : null}
    </Fullscreen>
  );
};

export default GameEnd;
