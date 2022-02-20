const GameModel = require("../../models/game.model");
const { findAnswerCard } = require("../cards");

module.exports = async (round) => {
  const game = await GameModel.findAnswers(round);

  let helperArray = [];

  for (const single of game) {
    let card = await findAnswerCard(single?.answerCardId);
    helperArray.push(card);
  }

  return helperArray;
};
