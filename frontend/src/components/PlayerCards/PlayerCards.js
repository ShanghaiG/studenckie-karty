import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GameStageStart from "../Stages/GameStageStart";
import GameStageWaiting from "../Stages/GameStageWaiting";

import RoundOne from "../Stages/RoundOne";
import LeaderCardsSelect from "../Stages/LeaderCardsSelect";
import LeaderChooseWinner from "../Stages/LeaderChooseWinner";
import RoundFinal from "../Stages/RoundFinal";

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
    case "LEADER_CHOOSE_CARD":
      return <LeaderCardsSelect />;
    case "ROUND_ONE":
      return <RoundOne />;
    case "LEADER_CHOOSE_WINNER":
      return <LeaderChooseWinner />;
    case "ROUND_END":
      return <RoundFinal />;
    default:
      return null;
  }
};

export default PlayerCards;
