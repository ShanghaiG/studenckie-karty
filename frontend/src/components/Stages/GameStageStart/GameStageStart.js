import React from "react";
import useGameStageStart from "./GameStageStart.hook";
import Fullscreen from "../../Layouts/Fullscreen";
import { setCode } from "../../../features/game/gameSlice";

const GameStageStart = () => {
  const { checkForm, code, dispatch, dispatchUser } = useGameStageStart();

  return (
    <Fullscreen>
      <h1 className={"testClass"}>Studenckie Karty</h1>

      <form
        className={"startForm"}
        onSubmit={(e) => {
          dispatchUser();
          e.preventDefault();
          checkForm();
        }}
      >
        <input
          type={"text"}
          placeholder="Podaj kod gry"
          value={code}
          onChange={(e) => {
            dispatch(setCode(e.target.value));
          }}
        />
        {code === "5sbs7" ? (
          <button type={"submit"}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Dołącz do gry
          </button>
        ) : null}
      </form>
    </Fullscreen>
  );
};

export default GameStageStart;
