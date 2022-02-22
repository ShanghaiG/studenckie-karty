import React from "react";
import useGameEnd from "./GameEnd.hook";
import Players from "../../Players";
import Fullscreen from "../../Layouts/Fullscreen";
import { Player } from "../../Players/Players";

const GameEnd = () => {
  const { winner, finish, endGame } = useGameEnd();

  return (
    <Fullscreen>
      <h1>Zwycięzcą zostaje</h1>
      {winner ? <Player player={winner} side={null} size={"large"} /> : null}
      {winner
        ? setTimeout(() => {
            endGame();
          }, 20000)
        : null}
    </Fullscreen>
  );
};

export default GameEnd;
