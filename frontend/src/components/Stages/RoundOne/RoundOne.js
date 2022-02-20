import React, { useState } from "react";
import useRoundOne from "./RoundOne.hook";
import { useSelector } from "react-redux";
import Players from "../../Players";
import Split from "../../Layouts/Split";
import Card from "../../Card/Card";
import useGameStageWaiting from "../GameStageWaiting/GameStageWaiting.hook";
import useLeaderChooseWinner from "../LeaderChooseWinner/LeaderChooseWinner.hook";

const RoundOne = () => {
  const { player, setPlayerAnswered, getMainCard, trueMainCard, updateCard } =
    useRoundOne();
  const { players } = useGameStageWaiting();

  const answerCards = useSelector((state) => state.game.answerCards);

  const { startRoundEnd } = useLeaderChooseWinner();

  const [selectedCard, setSelectedCard] = useState(null);
  const [isCardSelected, setIsCardSelected] = useState(false);

  return (
    <Split
      footer={
        isCardSelected ? (
          <div className={"footerCards"}>
            <Card
              data={selectedCard}
              selected={selectedCard ? true : false}
              onSelect={() => {}}
            />
          </div>
        ) : (
          answerCards?.map((element) => {
            return (
              <div className={"footerCards"}>
                <Card
                  data={element}
                  selected={element.id === selectedCard?.id ? true : false}
                  onSelect={() => {
                    setSelectedCard(element);
                    setIsCardSelected(true);
                    updateCard(player, element);
                    setPlayerAnswered(player);
                  }}
                />
              </div>
            );
          })
        )
      }
    >
      {isCardSelected ? (
        <h1>Oczekiwanie na koniec rundy</h1>
      ) : (
        <h1>Runda Pierwsza</h1>
      )}
      {getMainCard()}
      {trueMainCard ? (
        <div className={"mainCard"}>
          <Card data={trueMainCard} />
        </div>
      ) : null}
      <Players players={players} />
      {players?.length === 4 &&
      players.every((player) => player.hasAnswered === true)
        ? startRoundEnd()
        : null}
    </Split>
  );
};

export default RoundOne;
