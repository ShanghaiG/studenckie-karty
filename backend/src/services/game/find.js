const GameModel = require("../../models/game.model");

module.exports = async (userId, round) => {
  let game = await GameModel.find(userId, round);

  if (!game) return null;

  return game;
};
