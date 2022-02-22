import React, { useState } from "react";
import useRound from "../Round/Round.hook";
import { useSelector } from "react-redux";
import Players from "../../Players";
import Split from "../../Layouts/Split";
import Card from "../../Card/Card";
import useGameStageWaiting from "../GameStageWaiting/GameStageWaiting.hook";
import Fullscreen from "../../Layouts/Fullscreen";
import useLeaderCardsSelect from "./LeaderCardsSelect.hook";

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
      {mainCardData && player.isLeader
        ? setTimeout(() => {
            startChooseWinner();
          }, 4000)
        : null}
      <Players players={players} />
    </Split>
  ) : (
    <Fullscreen>
      <h1>Oczekiwanie na lidera</h1>
      <Players players={players} />
      {players.some((player) => player.isLeader && player.hasAnswered)
        ? setTimeout(() => {
            startRound();
          }, 4000)
        : null}
    </Fullscreen>
  );
};

export default LeaderCardsSelect;
