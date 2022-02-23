import React from "react";
import useRoundStart from "./RoundStart.hook";
import Players from "../../Players";
import Fullscreen from "../../Layouts/Fullscreen";
import useRoundFinal from "../RoundFinal/RoundFinal.hook";

const RoundStart = () => {
  const { startLeaderChooseCard, players } = useRoundStart();
  const { constRound } = useRoundFinal();
  const roundNames = ["Pierwsza", "Druga", "Trzecia", "Czwarta", "Piąta"];

  return (
    <Fullscreen>
      <h1 className={"testClass"}>Runda {roundNames[constRound - 1]}</h1>
      {players ? <Players players={players} /> : null}
      {setTimeout(() => {
        startLeaderChooseCard();
      }, 5000)}
    </Fullscreen>
  );
};

export default RoundStart;
