import React from "react";
import usePlayers from "./Players.hook";


const Player = (props) => {
    const {player, side, size} = props;

    return <div className={"player"} data-side={side} data-size={size}>
        <div className={"player__avatar"} data-winner={player.winner} data-admin={player.admin}>
            <img src={`https://eu.ui-avatars.com/api/?name=${player.firstName}+${player.lastName}`} alt={"avatar"}/>
        </div>
        <div className={"player__details"}>
            <div className={"player__name"}>
                {player.firstName} {player.lastName}
            </div>
            <div className={"player__score"}>
                {player.score} pkt {player.answer ? <span className={"player__answer"}/> : null}
            </div>
        </div>
    </div>
}

const Players = (props) => {
    const {players} = props;
    const {} = usePlayers(players);
    return <React.Fragment>
        <div className={"playersLeftSlot"}>
            {players.slice(0, 3).map((player) => {
                    return <div key={player.id}>
                        <Player player={player} side={"left"}/>
                    </div>
                }
            )}
        </div>
        <div className={"playersRightSlot"}>
            {players.slice(3, 6).map((player) => {
                    return <div key={player.id}>
                        <Player player={player} side={"right"}/>
                    </div>
                }
            )}
        </div>
    </React.Fragment>
};

export default Players;
