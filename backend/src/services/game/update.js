const GameModel = require("../../models/game.model");

module.exports = async (userId, round, data) => {
  const updatedGame = await GameModel.update(userId, round, data);

  return updatedGame;
};
