import React from "react";
import useGameStageWaiting from "./GameStageWaiting.hook";
import Players from "../../Players";

import Fullscreen from "../../Layouts/Fullscreen";

/*
 * Stage component where players are waiting for all players to connect
 */
const GameStageWaiting = () => {
  const { players, startRound } = useGameStageWaiting();

  return (
    <Fullscreen>
      <h1 className={"testClass"}>Gra zaraz się rozpocznie</h1>
      {players ? <Players players={players} /> : null}
      {players?.length === 4 ? startRound() : null}
    </Fullscreen>
  );
};

export default GameStageWaiting;
