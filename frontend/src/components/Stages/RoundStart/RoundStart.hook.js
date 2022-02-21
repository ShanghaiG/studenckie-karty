import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import { leaderChooseCard } from "../../../features/game/gameSlice";

const socket = io.connect("http://localhost:8001");

const useRoundStart = () => {
  const dispatch = useDispatch();
  const round = useSelector((state) => state.game.round);

  const startLeaderChooseCard = () => {
    dispatch(leaderChooseCard());
  };

  const getRoundName = () => {
    switch (round) {
      case 1:
        return "Pierwsza";
      case 2:
        return "Druga";
      case 3:
        return "Trzecia";
      case 4:
        return "Czwarta";
      case 5:
        return "Piąta";
      default:
        return null;
    }
  };
  // const [mainCard, setMainCard] = useState(null);
  // const [winnerCard, setWinnerCard] = useState(null);
  // // const [player, setPlayer] = useState(null);
  // const [enabled, setEnabled] = useState(true);

  // if (!mainCard && !winnerCard) {
  //   socket.emit("getWinnerCard", { round });

  //   if (enabled) {
  //     socket.emit("updateWinnerPlayer", { round });
  //     socket.emit("getPlayers");
  //     setEnabled(false);
  //   }

  //   socket.on("sendWinnerCards", (data) => {
  //     setMainCard(data.mainCard);
  //     setWinnerCard(data.winnerCard);
  //   });
  // }
  // console.log("co w mainCard, winnerCard", mainCard, winnerCard);

  // const clearMatchup = () => {
  //   socket.emit("clearPlayers");
  // };

  return { startLeaderChooseCard, getRoundName };
};

export default useRoundStart;
