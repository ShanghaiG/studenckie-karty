import React from "react";
import useGameStageWaiting from "./GameStageWaiting.hook";
import Players from "../../Players";

import Fullscreen from "../../Layouts/Fullscreen";

const GameStageWaiting = () => {
  const { players, startRound, round } = useGameStageWaiting();

  return (
    <Fullscreen>
      <h1>Gra zaraz się rozpocznie</h1>
      {players ? <Players players={players} /> : null}
      {players?.length === 4 ? startRound(round) : null}
    </Fullscreen>
  );
};

export default GameStageWaiting;
