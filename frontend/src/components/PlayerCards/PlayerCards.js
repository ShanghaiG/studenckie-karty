import React from "react";
import {useDispatch, useSelector} from "react-redux";
import GameStageStart from "../Stages/GameStageStart";
import GameStageWaiting from "../Stages/GameStageWaiting";


/**
 * PlayerCards component
 */
const PlayerCards = () => {
  const stage = useSelector((state) => state.game.stage);
  const answerCards = useSelector((state) => state.game.answerCards);
  const dispatch = useDispatch();


  if (stage === "START") {
    return <GameStageStart/>
  }
  if (stage === "WAITING") {
    return <GameStageWaiting/>
  }

  return null;
  // {answerCards?.map((element) => {
  //   return <Card data={element} />;
  // })}
};

export default PlayerCards;
