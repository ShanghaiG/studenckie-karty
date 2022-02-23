import React from "react";
import usePlayers from "./Players.hook";

export const Player = (props) => {
  const { player, side, size } = props;

  return (
    <div className={"player"} data-side={side} data-size={size}>
      <div
        className={"player__avatar"}
        data-winner={player.winner}
        data-admin={player.isLeader}
      >
        <img src={"https://i.ibb.co/yFXBqFR/avatar.png"} alt={"avatar"} />
      </div>
      <div className={"player__details"}>
        <div className={"player__name"}>
          {player.firstName} {player.lastName}
        </div>
        <div className={"player__score"}>
          {player.points} pkt{" "}
          {player.hasAnswered ? <span className={"player__answer"} /> : null}
        </div>
      </div>
    </div>
  );
};

const Players = (props) => {
  const { players } = props;

  const {} = usePlayers(players);
  return (
    <React.Fragment>
      <div className={"playersLeftSlot"}>
        {players.slice(0, 2).map((player) => {
          return (
            <div key={player.id}>
              <Player player={player} side={"left"} />
            </div>
          );
        })}
      </div>
      <div className={"playersRightSlot"}>
        {players.slice(2, 4).map((player) => {
          return (
            <div key={player.id}>
              <Player player={player} side={"right"} />
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Players;
