import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GameStageStart from "../Stages/GameStageStart";
import GameStageWaiting from "../Stages/GameStageWaiting";

import Round from "../Stages/Round";
import LeaderCardsSelect from "../Stages/LeaderCardsSelect";
import LeaderChooseWinner from "../Stages/LeaderChooseWinner";
import RoundFinal from "../Stages/RoundFinal";
import RoundStart from "../Stages/RoundStart";
import GameEnd from "../Stages/GameEnd";

/**
 * PlayerCards component
 */
const PlayerCards = () => {
  const stage = useSelector((state) => state.game.stage);

  console.log("stage to", stage);

  switch (stage) {
    case "START":
      return <GameStageStart />;
    case "WAITING":
      return <GameStageWaiting />;
    case "ROUND_START":
      return <RoundStart />;
    case "LEADER_CHOOSE_CARD":
      return <LeaderCardsSelect />;
    case "ROUND":
      return <Round />;
    case "LEADER_CHOOSE_WINNER":
      return <LeaderChooseWinner />;
    case "ROUND_END":
      return <RoundFinal />;
    case "GAME_END":
      return <GameEnd />;
    default:
      return null;
  }
};

export default PlayerCards;
