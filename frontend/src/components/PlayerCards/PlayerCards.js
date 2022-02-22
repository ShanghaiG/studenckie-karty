import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GameStageStart from "../Stages/GameStageStart";
import GameStageWaiting from "../Stages/GameStageWaiting";

import Round from "../Stages/Round";
import LeaderCardsSelect from "../Stages/LeaderCardsSelect";
import LeaderChooseWinner from "../Stages/LeaderChooseWinner";
import RoundFinal from "../Stages/RoundFinal";
import RoundStart from "../Stages/RoundStart";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8001");

// const Sockets = ({ stage, round, player, code }) => {
//   //emitters
//   useEffect(() => {
//     switch (stage) {
//       case "START":
//         socket.emit("joinRoom", { room: code, player });
//         break;
//       case "WAITING":
//         socket.emit("getPlayers", { room: code });
//         break;
//       case "ROUND_START":
//         return <RoundStart />;
//       case "LEADER_CHOOSE_CARD":
//         return <LeaderCardsSelect />;
//       case "ROUND":
//         return <Round />;
//       case "LEADER_CHOOSE_WINNER":
//         return <LeaderChooseWinner />;
//       case "ROUND_END":

//       default:
//         return null;
//     }
//     socket.emit("joinRoom", { room: code, player });
//     socket.emit("getPlayers", { room: code });
//     socket.emit("updateMainCard", {
//       user_id: player.id,
//       round,
//       main_card: data.id,
//     });
//     socket.emit("updatePlayer", { player, answer: true });
//     socket.emit("getMainCard", { round });
//     socket.emit("getCards", { round });
//     socket.emit("setWinnerCard", {
//       round,
//       cardId: data.id,
//     });
//     socket.emit("updatePlayer", { player, answer: true });
//     socket.emit("getPlayers");
//     socket.emit("getMainCard", { round });
//     socket.emit("updateAnswerCard", {
//       user_id: player.id,
//       round,
//       answer_card: data.id,
//     });
//     socket.emit("getCards", { round });
//     socket.emit("getPlayer", currentPlayer);
//     socket.emit("getWinnerCard", { round });
//     socket.emit("updateWinnerPlayer", { round });
//     socket.emit("getPlayers");
//     socket.emit("clearPlayers");
//   }, []);

//   //listeners
//   useEffect(() => {
//     socket.on("sendPlayers", (data) => {
//       enabled = false;
//       setPlayers(data);
//     });

//     socket.on("sendMainCard2", (data) => {
//       setMainCard(data);
//     });

//     socket.on("sendCards", (data) => {
//       if (data.includes(null)) {
//         return;
//       } else {
//         setCards(data);
//       }
//     });

//     socket.on("sendMainCard", (data) => {
//       setMainCard(data);
//     });

//     socket.on("sendMainCard2", (data) => {
//       disabled = false;
//       setTrueMainCard(data);
//     });

//     socket.on("sendPlayer", (data) => {
//       enabled = false;
//       setPlayer(data);
//     });

//     socket.on("sendWinnerCards", (data) => {
//       if (!data) {
//         setMainCard(data?.mainCard);
//         setWinnerCard(data?.winnerCard);
//       }
//     });

//     return () => socket.disconnect();
//   }, []);
// };

// const GameStartSockets = ({ code, player }) => {
//   useEffect(() => {
//     socket.emit("joinRoom", { room: code, player });
//   });
// };

/**
 * PlayerCards component
 */
const PlayerCards = () => {
  const stage = useSelector((state) => state.game.stage);
  const round = useSelector((state) => state.game.round);
  const code = useSelector((state) => state.game.code);
  const player = useSelector((state) => state.game.player);

  console.log("stage to", stage);

  // Sockets({ stage, round, player, code });

  switch (stage) {
    case "START":
      // GameStartSockets(code, player);
      return <GameStageStart />;
    case "WAITING":
      return <GameStageWaiting />;
    case "ROUND_START":
      return <RoundStart />;
    case "LEADER_CHOOSE_CARD":
      return <LeaderCardsSelect />;
    case "ROUND":
      return <Round />;
    case "LEADER_CHOOSE_WINNER":
      return <LeaderChooseWinner />;
    // case "ROUND_END":
    //   return <RoundFinal />;
    default:
      return null;
  }
};

export default PlayerCards;
