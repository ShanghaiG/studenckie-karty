import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8001");

//TODO:
//needs to be fix, not working

const useRound = () => {
  const currentPlayer = useSelector((state) => state.game.player);
  const round = useSelector((state) => state.game.round);
  const [mainCard, setMainCard] = useState(null);
  const [player, setPlayer] = useState(null);

  const [trueMainCard, setTrueMainCard] = useState(null);
  const [players, setPlayers] = useState([]);
  const [answerCardData, setAnswerCardData] = useState(null);
  const [playerData, setPlayerData] = useState(null);

  let disabled = true;

  useEffect(() => {
    if (!players.length) {
      socket.emit("getPlayers");
    }

    return () => {
      socket.off("getPlayers");
    };
  }, [players]);

  useEffect(() => {
    socket.on("sendPlayers", (data) => {
      setPlayers(data);
    });

    socket.on("sendPlayer", (data) => {
      setPlayer(data);
    });

    if (!mainCard) {
      socket.on("sendMainCard", (data) => {
        setMainCard(data);
      });
    }

    return () => {
      socket.off("sendPlayers");
      socket.off("sendPlayer");
      socket.off("sendMainCard");
    };
  }, []);

  useEffect(() => {
    if (playerData) {
      socket.emit("updatePlayer", { player, answer: true });
      socket.emit("getPlayers");
    }

    socket.emit("getPlayer", currentPlayer);

    if (answerCardData) {
      socket.emit("updateAnswerCard", {
        user_id: playerData.id,
        round,
        answer_card: answerCardData.id,
      });
      socket.emit("getCards", { round });
    }
  });

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
    if (!playerData) {
      setPlayerData(player);
    }

    if (!answerCardData) {
      setAnswerCardData(data);
    }
  };

  return {
    player,
    mainCard,
    trueMainCard,
    getMainCard,
    updateCard,
    players,
  };
};

export default useRound;
