import React, { useState } from "react";
import Players from "../../Players";
import Split from "../../Layouts/Split";
import Card from "../../Card/Card";

import useGameStageWaiting from "../GameStageWaiting/GameStageWaiting.hook";
import useLeaderChooseWinner from "./LeaderChooseWinner.hook";

const LeaderChooseWinner = () => {
  //   const { players } = useGameStageWaiting();
  const { mainCard, cards, setWinnerCard, startRoundEnd, players } =
    useLeaderChooseWinner();

  //   const { startRoundOne, setMainCard, setPlayerAnswered } =
  //     useLeaderCardsSelect();

  //   const mainCards = useSelector((state) => state.game.mainCards);

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
        ) : cards.length && !cards.includes(null) ? (
          cards?.map((element) => {
            return (
              <div className={"footerCards"} key={element.id}>
                <Card
                  data={element}
                  selected={element.id === selectedCard?.id ? true : false}
                  onSelect={() => {
                    setSelectedCard(element);
                    setIsCardSelected(true);
                    setWinnerCard(element);
                  }}
                />
              </div>
            );
          })
        ) : null
      }
    >
      <h1>Wybierz zwycięzcę</h1>
      {mainCard ? (
        <div className={"mainCard"}>
          <Card data={mainCard} />
        </div>
      ) : null}

      <Players players={players} />
      {/* {players.every((player) => player.hasAnswered === true)
        ? setTimeout(() => {
            startRoundEnd();
          }, 2000)
        : null} */}
    </Split>
  );
};

export default LeaderChooseWinner;
