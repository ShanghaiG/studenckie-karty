import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import { roundOne, leaderChooseWinner } from "../../../features/game/gameSlice";

const socket = io.connect("http://localhost:8001");

const useLeaderCardsSelect = () => {
  const dispatch = useDispatch();
  const round = useSelector((state) => state.game.round);

  const [playerData, setPlayerData] = useState(null);
  const [players, setPlayers] = useState([]);
  const [mainCardData, setMainCardData] = useState(null);

  const setMainCard = (player, data) => {
    if (!playerData) {
      setPlayerData(player);
    }
    if (!mainCardData) {
      setMainCardData(data);
    }
  };

  const startRound = () => {
    dispatch(roundOne());
  };

  const startChooseWinner = () => {
    dispatch(leaderChooseWinner());
  };

  useEffect(() => {
    if (playerData) {
      socket.emit("updatePlayer", { player: playerData, answer: true });
      socket.emit("getPlayers");
    }

    if (mainCardData) {
      socket.emit("updateMainCard", {
        user_id: playerData.id,
        round,
        main_card: mainCardData.id,
      });
    }

    return () => {
      socket.off("getPlayers");
      socket.off("updatePlayer");
      socket.off("updateMainCard");
    };
  }, [mainCardData, playerData, round]);

  useEffect(() => {
    if (!players.length) {
      console.log("players w LeaderCardsSelect", players);
      socket.emit("getPlayers");
    }

    return () => {
      socket.off("getPlayers");
    };
  });

  useEffect(() => {
    socket.on("sendPlayers", (data) => {
      console.log("sendCards LeaderCardsSelect", data);
      setPlayers(data);
    });

    return () => {
      socket.off("sendPlayers");
    };
  }, []);

  return {
    startRound,
    setMainCard,
    startChooseWinner,
    players,
  };
};

export default useLeaderCardsSelect;
