import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import { roundEnd } from "../../../features/game/gameSlice";

const socket = io.connect("http://localhost:8001");

const useLeaderChooseWinner = () => {
  const dispatch = useDispatch();
  const round = useSelector((state) => state.game.round);

  const [mainCard, setMainCard] = useState(null);
  const [cards, setCards] = useState([]);

  if (!mainCard) {
    socket.emit("getMainCard", { round });
    socket.on("sendMainCard2", (data) => {
      setMainCard(data);
    });
  }

  if (!cards.length || cards.includes(null)) {
    socket.emit("getCards", { round });
    socket.on("sendCards", (data) => {
      if (data.includes(null)) {
        return;
      } else {
        setCards(data);
      }
    });
  }

  const setWinnerCard = (data) => {
    socket.emit("setWinnerCard", {
      round,
      cardId: data.id,
    });
  };

  const startRoundEnd = () => {
    dispatch(roundEnd());
  };
  //   const setMainCard = (player, data) => {
  //     console.log("co w playerId, data", player, data);
  //     socket.emit("updateMainCard", {
  //       user_id: player.id,
  //       round,
  //       main_card: data.id,
  //     });
  //   };

  //   const setPlayerAnswered = (player) => {
  //     socket.emit("updatePlayer", { player, answer: true });
  //     socket.emit("getPlayers");
  //   };
  //   const startRoundOne = () => {
  //     dispatch(roundOne());
  //   };

  return { mainCard, cards, setWinnerCard, startRoundEnd };
};

export default useLeaderChooseWinner;
