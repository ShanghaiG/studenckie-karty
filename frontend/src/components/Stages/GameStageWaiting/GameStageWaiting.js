import React from "react";
import useGameStageWaiting from "./GameStageWaiting.hook";
import Fullscreen from "../../Layouts/Fullscreen";

const GameStageWaiting = (props) => {
  const {} = useGameStageWaiting();
  return (
    <Fullscreen>
      <h1>Gra zaraz się rozpocznie</h1>
      {/* <form
      className={"startForm"}
      onSubmit={(e) => {
        dispatchUser();
        e.preventDefault();
        checkForm();
      }}
    >
      <input
        type={"text"}
        value={code}
        onChange={(e) => {
          dispatch(setCode(e.target.value));
        }}
      />
      <button type={"submit"}>&gt;</button>
    </form> */}
    </Fullscreen>
  );
};

export default GameStageWaiting;
