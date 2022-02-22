import React, { useState } from "react";
import useRound from "./Round.hook";
import { useSelector } from "react-redux";
import Players from "../../Players";
import Split from "../../Layouts/Split";
import Card from "../../Card/Card";
import useLeaderChooseWinner from "../LeaderChooseWinner/LeaderChooseWinner.hook";

const Round = () => {
  const { players, updateCard, mainCard, updateUser, winnerCard } = useRound();

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
              <div className={"footerCards"} key={element.id}>
                <Card
                  data={element}
                  selected={element.id === selectedCard?.id ? true : false}
                  onSelect={() => {
                    setSelectedCard(element);
                    setIsCardSelected(true);
                    updateCard(element);
                    updateUser();
                  }}
                />
              </div>
            );
          })
        )
      }
    >
      {isCardSelected ? <h1>Oczekiwanie na koniec rundy</h1> : null}

      {mainCard ? (
        <div className={"mainCard"}>
          <Card data={mainCard} />
        </div>
      ) : null}
      <Players players={players} />
      {players.every((player) => player.hasAnswered === true) &&
      players.some((player) => player.winner)
        ? setTimeout(() => {
            startRoundEnd();
          }, 4000)
        : null}
    </Split>
  );
};

export default Round;
