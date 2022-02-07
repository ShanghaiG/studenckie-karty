import React, { useState } from "react";
import useGameStageStart from "./GameStageStart.hook";
import Fullscreen from "../../Layouts/Fullscreen";
import { setCode } from "../../../features/game/gameSlice";

const GameStageStart = ({ socket }) => {
  const { checkForm, code, dispatch, player } = useGameStageStart();

  const [room, setRoom] = useState("");

  const joinRoom = () => {
    console.log("co w socket, co w room", { code, room });
    if (code && room) {
      socket.emit("joinRoom", { room });
    }
  };

  return (
    <Fullscreen>
      <h1>Dołącz do gry</h1>
      <form
        className={"startForm"}
        onSubmit={(e) => {
          console.log("co w e", e);
          console.log("co w code", code);
          e.preventDefault();
          checkForm();
          joinRoom();
        }}
      >
        <input
          type={"text"}
          value={code}
          onChange={(e) => {
            dispatch(setCode(e.target.value));
            setRoom(e.target.value);
          }}
        />
        <button type={"submit"}>></button>
      </form>
    </Fullscreen>
  );
};

export default GameStageStart;
