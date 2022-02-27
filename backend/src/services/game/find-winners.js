const GameModel = require("../../models/game.model");
const { findAnswerCard, findMainCard } = require("../cards");

module.exports = async (round) => {
  if (!round) return null;

  let mainGame = await GameModel.findMain(round);

  let winnerGame = await GameModel.findWinner(round);

  let mainCard = await findMainCard(mainGame?.mainCardId);

  if (!mainCard) return null;
  let winnerCard = await findAnswerCard(winnerGame?.answerCardId);

  if (!winnerCard) return null;
  return {
    mainCard,
    winnerCard,
  };
};
