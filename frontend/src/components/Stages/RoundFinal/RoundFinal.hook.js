import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import { roundStart } from "../../../features/game/gameSlice";

const socket = io.connect("http://localhost:8001");

const useRoundFinal = () => {
  const dispatch = useDispatch();
  const round = useSelector((state) => state.game.round);
  const [mainCard, setMainCard] = useState(null);
  const [winnerCard, setWinnerCard] = useState(null);
  const [players, setPlayers] = useState([]);

  const [isCleared, setIsCleared] = useState(false);

  useEffect(() => {
    if (!players.length) {
      socket.emit("getPlayers");
    }
  }, [players]);

  useEffect(() => {
    socket.on("sendPlayers", (data) => {
      setPlayers(data);
    });

    return () => {
      socket.off("sendPlayers");
    };
  }, []);

  useEffect(() => {
    if (!mainCard || !winnerCard) {
      socket.emit("getWinnerCard", { round });
      socket.emit("updateWinnerPlayer", { round });
    }

    if (isCleared) {
      socket.emit("clearPlayers");
      socket.emit("getPlayers");
    }

    return () => {
      socket.off("getWinnerCard");
      socket.off("updateWinnerPlayer");
      socket.off("clearPlayers");
      socket.off("getPlayers");
    };
  });

  useEffect(() => {
    socket.on("sendWinnerCards", (data) => {
      if (!data) {
        setMainCard(data?.mainCard);
        setWinnerCard(data?.winnerCard);
      }
    });

    return () => {
      socket.off("sendWinnerCards");
    };
  }, []);

  const clearMatchup = () => {
    if (!isCleared) {
      setIsCleared(true);
    }
  };

  const startRound = (roundNumber) => {
    dispatch(roundStart(roundNumber));
  };

  return {
    mainCard,
    winnerCard,
    clearMatchup,
    round,
    startRound,
    players,
  };
};

export default useRoundFinal;
