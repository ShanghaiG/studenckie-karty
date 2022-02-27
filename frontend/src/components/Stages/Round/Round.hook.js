import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import { roundEnd } from "../../../features/game/gameSlice";

const socket = io.connect("http://localhost:8001");

const useRound = () => {
  const dispatch = useDispatch();
  const currentPlayer = useSelector((state) => state.game.player);
  const round = useSelector((state) => state.game.round);
  const [mainCard, setMainCard] = useState(null);

  const [player, setPlayer] = useState(null);

  const [players, setPlayers] = useState([]);
  const [answerCardData, setAnswerCardData] = useState(null);
  const [userUpdated, setUserUpdated] = useState(false);

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

    socket.on("sendMainCard2", (data) => {
      setMainCard(data);
    });

    return () => {
      socket.off("sendPlayers");
      socket.off("sendPlayer");
      socket.off("sendMainCard2");
    };
  }, []);

  useEffect(() => {
    if (!mainCard) {
      socket.emit("getMainCard", { round });
    }

    if (!player && userUpdated) {
      socket.emit("updatePlayer", { player: currentPlayer, answer: true });
      socket.emit("getPlayer", currentPlayer);
      socket.emit("getPlayers");
    }

    if (answerCardData) {
      socket.emit("updateAnswerCard", {
        user_id: currentPlayer.id,
        round,
        answer_card: answerCardData.id,
      });
      socket.emit("getCards", { round });
    }

    return () => {
      socket.off("updatePlayer");
      socket.off("getPlayer");
      socket.off("updateAnswerCard");
      socket.off("getCards");
    };
  });

  const updateUser = () => {
    if (!userUpdated) {
      socket.emit("getPlayers");
      setUserUpdated(true);
    }
  };

  const updateCard = (data) => {
    if (!answerCardData) {
      setAnswerCardData(data);
    }
  };

  const startRoundEnd = () => {
    dispatch(roundEnd());
  };

  return {
    mainCard,
    updateCard,
    players,
    updateUser,
    startRoundEnd,
  };
};

export default useRound;
