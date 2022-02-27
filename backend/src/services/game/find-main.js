const GameModel = require("../../models/game.model");

module.exports = async (round) => {
  let game = await GameModel.findMain(round);

  if (!game) return null;

  return game;
};
