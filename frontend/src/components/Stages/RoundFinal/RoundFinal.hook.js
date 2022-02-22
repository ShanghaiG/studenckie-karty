import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import {
  roundSecond,
  roundStart,
  roundThird,
} from "../../../features/game/gameSlice";

const socket = io.connect("http://localhost:8001");

const useRoundFinal = () => {
  const dispatch = useDispatch();
  const currentPlayer = useSelector((state) => state.game.player);
  const round = useSelector((state) => state.game.round);
  const [mainCard, setMainCard] = useState(null);
  const [winnerCard, setWinnerCard] = useState(null);
  const [players, setPlayers] = useState([]);

  const [isCleared, setIsCleared] = useState(false);
  const [updatedUser, setUpdatedUser] = useState(null);
  const [updatedPoints, setUpdatedPoints] = useState(false);

  const constRound = round;

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

    if (!updatedUser) {
      socket.emit("updateWinnerPlayer", { round });
      socket.emit("getPlayers");
    }

    if (updatedUser && !updatedPoints && updatedUser.id === currentPlayer.id) {
      console.log("jak czesto weszlo w updatePoints");
      socket.emit("updatePoints", updatedUser);
      socket.emit("getPlayers");
      setUpdatedPoints(true);
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
      socket.off("updatePoints");
    };
  }, [
    mainCard,
    winnerCard,
    updatedUser,
    updatedPoints,
    isCleared,
    round,
    currentPlayer.id,
  ]);

  useEffect(() => {
    socket.on("sendWinnerCards", (data) => {
      if (data) {
        setMainCard(data?.mainCard);
        setWinnerCard(data?.winnerCard);
      }
    });

    socket.on("sendUpdateWinnerPlayer", (data) => {
      setUpdatedUser(data);
    });

    return () => {
      socket.off("sendWinnerCards");
      socket.off("sendUpdateWinnerPlayer");
    };
  }, []);

  const clearMatchup = () => {
    if (!isCleared) {
      setIsCleared(true);
    }
  };

  const startRound = () => {
    switch (constRound) {
      case 1:
        dispatch(roundSecond());
        break;
      case 2:
        dispatch(roundThird());
        break;
      // case 3:
      //   dispatch(roundStart(4));
      //   break;
      // case 4:
      //   dispatch(roundStart(5));
      //   break;
      // case 5:
      //   return null;
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
    constRound,
  };
};

export default useRoundFinal;
