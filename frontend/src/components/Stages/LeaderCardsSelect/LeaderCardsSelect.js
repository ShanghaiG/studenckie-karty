import React, { useState } from "react";
import useRound from "../Round/Round.hook";
import { useSelector } from "react-redux";
import Players from "../../Players";
import Split from "../../Layouts/Split";
import Card from "../../Card/Card";
import io from "socket.io-client";
import useGameStageWaiting from "../GameStageWaiting/GameStageWaiting.hook";
import Fullscreen from "../../Layouts/Fullscreen";
import useLeaderCardsSelect from "./LeaderCardsSelect.hook";

const socket = io.connect("http://localhost:8001");

const LeaderCardsSelect = () => {
  const { player, mainCard } = useRound();
  const { players } = useGameStageWaiting();
  const { startRound, setMainCard, setPlayerAnswered, startChooseWinner } =
    useLeaderCardsSelect();

  const mainCards = useSelector((state) => state.game.mainCards);

  const [selectedCard, setSelectedCard] = useState(null);
  const [isCardSelected, setIsCardSelected] = useState(false);

  return player?.isLeader ? (
    <Split
      footer={mainCards?.map((element) => {
        return (
          <div className={"footerCards"}>
            <Card
              data={element}
              selected={element.id === selectedCard?.id ? true : false}
              onSelect={() => {
                setSelectedCard(element);
                setIsCardSelected(true);
                setMainCard(player, element);
                setPlayerAnswered(player);
                startChooseWinner();
              }}
            />
          </div>
        );
      })}
    >
      <h1>Wybierz kartę główną</h1>

      <Players players={players} />
    </Split>
  ) : (
    <Fullscreen>
      <h1>Oczekiwanie na lidera</h1>
      <Players players={players} />
      {mainCard ? startRound() : null}
    </Fullscreen>
  );
};

export default LeaderCardsSelect;
//updatedPlayers?.some((player) => player.isLeader && player.hasAnswered
