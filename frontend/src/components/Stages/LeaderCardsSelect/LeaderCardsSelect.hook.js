import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import { roundOne, leaderChooseWinner } from "../../../features/game/gameSlice";

const socket = io.connect("http://localhost:8001");

const useLeaderCardsSelect = () => {
  const dispatch = useDispatch();
  const round = useSelector((state) => state.game.round);

  const setMainCard = (player, data) => {
    socket.emit("updateMainCard", {
      user_id: player.id,
      round,
      main_card: data.id,
    });
  };

  const setPlayerAnswered = (player) => {
    socket.emit("updatePlayer", { player, answer: true });
    socket.emit("getPlayers");
  };
  const startRoundOne = () => {
    dispatch(roundOne());
  };

  const startChooseWinner = () => {
    dispatch(leaderChooseWinner());
  };

  return { startRoundOne, setMainCard, setPlayerAnswered, startChooseWinner };
};

export default useLeaderCardsSelect;
