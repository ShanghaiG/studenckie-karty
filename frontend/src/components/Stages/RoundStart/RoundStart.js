import React, { useEffect } from "react";
import useRoundStart from "./RoundStart.hook";
import Players from "../../Players";
import Fullscreen from "../../Layouts/Fullscreen";

/*
 * Component that tells which round currently is played
 */
const RoundStart = () => {
  const { startLeaderChooseCard, players, round } = useRoundStart();
  const roundNames = ["Pierwsza", "Druga", "Trzecia", "Czwarta", "Piąta"];

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

  return (
    <Fullscreen>
      <h1 className={"testClass"}>Runda {roundNames[round - 1]}</h1>
      {players ? <Players players={players} /> : null}
      <TimeoutComponent action={startLeaderChooseCard} time={2000} />
    </Fullscreen>
  );
};

export default RoundStart;
