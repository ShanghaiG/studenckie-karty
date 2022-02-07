import { useDispatch, useSelector } from "react-redux";
import {
  startGame,
  fetchAvailableUser,
} from "../../../features/game/gameSlice";

const useGameStageStart = () => {
  const code = useSelector((state) => state.game.code);
  const dispatch = useDispatch();

  const user = dispatch(startGame(code));
  console.log("co w user", user);

  const checkForm = () => {
    if (code === "5sbs7") {
      dispatch(startGame(code));
    }
  };
  return {
    code,
    dispatch,
    checkForm,
  };
};

export default useGameStageStart;
