import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import { leaderChooseCard, roundStart } from "../../../features/game/gameSlice";

const socket = io.connect("http://localhost:8001");

const useGameStageWaiting = () => {
  const dispatch = useDispatch();
  const code = useSelector((state) => state.game.code);
  const round = useSelector((state) => state.game.round);

  const [players, setPlayers] = useState([]);

  let enabled = true;
  useEffect(() => {
    if (!enabled) {
      return;
    }
    socket.emit("getPlayers", { room: code });
    socket.on("sendPlayers", (data) => {
      enabled = false;
      setPlayers(data);
    });
  }, [enabled]);

  const startRound = (roundNumber) => {
    dispatch(roundStart(roundNumber));
  };

  return { players, startRound, round };
};

export default useGameStageWaiting;
