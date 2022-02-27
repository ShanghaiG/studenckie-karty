import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import { roundStart } from "../../../features/game/gameSlice";

const socket = io.connect("http://localhost:8001");

const useGameStageWaiting = () => {
  const dispatch = useDispatch();
  const code = useSelector((state) => state.game.code);
  const round = useSelector((state) => state.game.round);

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    if (!players.length) {
      socket.emit("getPlayers", { room: code });
    }
  }, [players, code]);

  useEffect(() => {
    socket.on("sendPlayers", (data) => {
      setPlayers(data);
    });

    return () => {
      socket.off("sendPlayers");
    };
  }, []);

  const startRound = () => {
    dispatch(roundStart());
  };

  return { players, startRound, round };
};

export default useGameStageWaiting;
