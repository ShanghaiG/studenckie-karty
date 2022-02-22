import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import { leaderChooseCard } from "../../../features/game/gameSlice";

const socket = io.connect("http://localhost:8001");

const useRoundStart = () => {
  const dispatch = useDispatch();
  const round = useSelector((state) => state.game.round);
  const [players, setPlayers] = useState([]);

  const startLeaderChooseCard = () => {
    dispatch(leaderChooseCard());
  };

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

  return { startLeaderChooseCard, getRoundName, players };
};

export default useRoundStart;
