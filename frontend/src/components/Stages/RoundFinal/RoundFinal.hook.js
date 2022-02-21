import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8001");

const useRoundFinal = () => {
  const round = useSelector((state) => state.game.round);
  const [mainCard, setMainCard] = useState(null);
  const [winnerCard, setWinnerCard] = useState(null);
  // const [player, setPlayer] = useState(null);
  const [enabled, setEnabled] = useState(true);
  const [enabled2, setEnabled2] = useState(true);

  if (!mainCard && !winnerCard) {
    socket.emit("getWinnerCard", { round });

    if (enabled) {
      socket.emit("updateWinnerPlayer", { round });
      socket.emit("getPlayers");
      setEnabled(false);
    }

    socket.on("sendWinnerCards", (data) => {
      setMainCard(data.mainCard);
      setWinnerCard(data.winnerCard);
    });
  }
  console.log("co w mainCard, winnerCard", mainCard, winnerCard);

  const clearMatchup = () => {
    if (enabled2) {
      socket.emit("clearPlayers");
      setEnabled2(false);
    }
  };

  return {
    mainCard,
    winnerCard,
    clearMatchup,
    round,
  };
};

export default useRoundFinal;