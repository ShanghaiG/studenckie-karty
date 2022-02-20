const GameModel = require("../../models/game.model");

module.exports = async (round, cardId) => {
  const updateWinner = await GameModel.updateWinner(round, cardId);

  return updateWinner;
};
