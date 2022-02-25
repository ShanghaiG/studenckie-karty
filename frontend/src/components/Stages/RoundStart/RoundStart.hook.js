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
    return () => {
      socket.off("getPlayers");
    };
  }, [players]);

  useEffect(() => {
    socket.on("sendPlayers", (data) => {
      setPlayers(data);
    });

    return () => {
      socket.off("sendPlayers");
    };
  }, []);

  return { startLeaderChooseCard, players, round };
};

export default useRoundStart;
