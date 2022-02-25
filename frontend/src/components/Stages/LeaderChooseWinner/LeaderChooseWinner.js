import React, { useEffect, useState } from "react";
import Players from "../../Players";
import Split from "../../Layouts/Split";
import Card from "../../Card/Card";

import useLeaderChooseWinner from "./LeaderChooseWinner.hook";

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

const LeaderChooseWinner = () => {
  const {
    mainCard,
    cards,
    setWinnerCard,
    startRoundEnd,
    players,
    isWinnerCard,
    updateWinnerPoints,
  } = useLeaderChooseWinner();

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
      <h1 className={"testClass"}>Wybierz zwycięzcę</h1>
      {mainCard ? (
        <div className={"mainCard"}>
          <Card data={mainCard} />
        </div>
      ) : null}

      <Players players={players} />
      {isWinnerCard &&
      players.every((player) => player.hasAnswered === true) &&
      players.some((player) => player.winner) ? (
        <TimeoutComponent action={startRoundEnd} time={6000} />
      ) : null}
    </Split>
  );
};

export default LeaderChooseWinner;
