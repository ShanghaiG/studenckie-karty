import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import io from "socket.io-client";
import { rebuildGame } from "../../../features/game/gameSlice";

const socket = io.connect("http://localhost:8001");

const useGameEnd = () => {
  const dispatch = useDispatch();
  const [winner, setWinner] = useState(null);

  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (!winner) {
      socket.emit("getWinner");
    }

    if (isFinished) {
      socket.emit("finish");
    }
    return () => {
      socket.off("getWinner");
      socket.off("finish");
    };
  });

  useEffect(() => {
    socket.on("sendWinner", (data) => {
      setWinner(data);
    });

    socket.on("sendFinish");

    return () => {
      socket.off("sendWinner");
      socket.off("sendFinish");
    };
  }, []);

  const endGame = () => {
    if (!isFinished) {
      setIsFinished(true);
    }
    dispatch(rebuildGame());
  };
  return { winner, endGame };
};

export default useGameEnd;
