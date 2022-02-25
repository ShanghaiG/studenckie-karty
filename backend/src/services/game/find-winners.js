const GameModel = require("../../models/game.model");
const { findAnswerCard, findMainCard } = require("../cards");

module.exports = async (round) => {
  console.log("runda", round);
  if (!round) return null;
  let mainGame = await GameModel.findMain(round);
  console.log("mainGame", mainGame);
  let winnerGame = await GameModel.findWinner(round);
  console.log("winnerGame", winnerGame);
  let mainCard = await findMainCard(mainGame?.mainCardId);
  console.log("mainCard", mainCard);
  if (!mainCard) return null;
  let winnerCard = await findAnswerCard(winnerGame?.answerCardId);
  console.log("winnerCard", winnerCard);
  if (!winnerCard) return null;
  return {
    mainCard,
    winnerCard,
  };
};
