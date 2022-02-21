import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8001");

const useRound = () => {
  const currentPlayer = useSelector((state) => state.game.player);
  const round = useSelector((state) => state.game.round);
  const [mainCard, setMainCard] = useState(null);
  const [player, setPlayer] = useState(null);

  const [trueMainCard, setTrueMainCard] = useState(null);

  let enabled = true;
  let disabled = true;

  const setPlayerAnswered = (player) => {
    socket.emit("updatePlayer", { player, answer: true });
    socket.emit("getPlayers");
  };

  if (!mainCard) {
    socket.on("sendMainCard", (data) => {
      setMainCard(data);
    });
  }

  const getMainCard = () => {
    if (!disabled) {
      return;
    }
    if (!trueMainCard) {
      socket.emit("getMainCard", { round });
    }
    socket.on("sendMainCard2", (data) => {
      disabled = false;
      setTrueMainCard(data);
    });
  };

  const updateCard = (player, data) => {
    socket.emit("updateAnswerCard", {
      user_id: player.id,
      round,
      answer_card: data.id,
    });
    socket.emit("getCards", { round });
  };

  useEffect(() => {
    if (!enabled) {
      return;
    }
    socket.emit("getPlayer", currentPlayer);
    socket.on("sendPlayer", (data) => {
      enabled = false;
      setPlayer(data);
    });
  }, [enabled]);
  return {
    player,
    setPlayerAnswered,
    mainCard,
    trueMainCard,
    getMainCard,
    updateCard,
  };
};

export default useRound;
