import React, { useEffect, useState } from "react";
import useRound from "../Round/Round.hook";
import { useSelector } from "react-redux";
import Players from "../../Players";
import Split from "../../Layouts/Split";
import Card from "../../Card/Card";
import useGameStageWaiting from "../GameStageWaiting/GameStageWaiting.hook";
import Fullscreen from "../../Layouts/Fullscreen";
import useLeaderCardsSelect from "./LeaderCardsSelect.hook";

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

const LeaderCardsSelect = () => {
  const {
    players,
    startRound,
    setMainCard,
    startChooseWinner,
    player,
    mainCardData,
  } = useLeaderCardsSelect();

  const mainCards = useSelector((state) => state.game.mainCards);

  const [selectedCard, setSelectedCard] = useState(null);
  const [isCardSelected, setIsCardSelected] = useState(false);

  return player?.isLeader ? (
    <Split
      footer={mainCards?.map((element) => {
        return (
          <div className={"footerCards"} key={element.id}>
            <Card
              data={element}
              selected={element.id === selectedCard?.id ? true : false}
              onSelect={() => {
                setSelectedCard(element);
                setIsCardSelected(true);
                setMainCard(player, element);
              }}
            />
          </div>
        );
      })}
    >
      <h1>Wybierz kartę główną</h1>
      {mainCardData && player.isLeader ? (
        <TimeoutComponent action={startChooseWinner} time={4000} />
      ) : null}
      <Players players={players} />
    </Split>
  ) : (
    <Fullscreen>
      <h1 className={"testClass"}>Oczekiwanie na lidera</h1>
      <Players players={players} />
      {players.some((player) => player.isLeader && player.hasAnswered) ? (
        <TimeoutComponent action={startRound} time={2000} />
      ) : null}
    </Fullscreen>
  );
};

export default LeaderCardsSelect;
