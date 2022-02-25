import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import {
  roundTwo,
  roundThree,
  gameEnd,
} from "../../../features/game/gameSlice";

const socket = io.connect("http://localhost:8001");
//pointsy do poprawy
const useRoundFinal = () => {
  const dispatch = useDispatch();
  const currentPlayer = useSelector((state) => state.game.player);
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
    }

    if (isCleared) {
      socket.emit("clearPlayers");
      socket.emit("getPlayers");
    }

    return () => {
      socket.off("clearPlayers");
      socket.off("getPlayers");
    };
  }, [mainCard, winnerCard, isCleared, round, currentPlayer.id]);

  useEffect(() => {
    socket.on("sendWinnerCards", (data) => {
      console.log("co w data", data);
      if (data) {
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

  const startRound = () => {
    console.log("round", round);
    switch (round) {
      case 1:
        dispatch(roundTwo());
        break;
      case 2:
        dispatch(gameEnd());
        break;
      default:
        return null;
    }
  };

  return {
    mainCard,
    winnerCard,
    clearMatchup,
    startRound,
    players,
    isCleared,
  };
};

export default useRoundFinal;
