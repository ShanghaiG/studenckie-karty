import React from "react";
import useGameStageStart from "./GameStageStart.hook";
import Fullscreen from "../../Layouts/Fullscreen";
import {setCode} from "../../../features/game/gameSlice";

const GameStageStart = () => {
    const {checkForm, code, dispatch} = useGameStageStart();

    return <Fullscreen>
        <h1>Dołącz do gry</h1>
        <form className={"startForm"} onSubmit={(e) => {
            e.preventDefault();
            checkForm()
        }}>
            <input type={"text"} value={code} onChange={(e) => {
                dispatch(setCode(e.target.value))
            }}/>
            <button type={"submit"}>>
            </button>
        </form>
    </Fullscreen>
};

export default GameStageStart;