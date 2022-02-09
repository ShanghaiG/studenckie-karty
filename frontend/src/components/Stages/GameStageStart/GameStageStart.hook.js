import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import {
  startGame,
  preloadAvailableUser,
} from "../../../features/game/gameSlice";

const socket = io.connect("http://localhost:8001");

const useGameStageStart = () => {
  const dispatch = useDispatch();
  const code = useSelector((state) => state.game.code);

  const dispatchUser = () => {
    dispatch(preloadAvailableUser());
  };

  const player = useSelector((state) => state.game.player);

  const checkForm = () => {
    if (code === "5sbs7") {
      dispatch(startGame(code));
    }
  };

  if (player instanceof Object) {
    socket.emit("joinRoom", { room: code, player });
  }

  return {
    code,
    dispatch,
    checkForm,
    dispatchUser,
  };
};

export default useGameStageStart;
