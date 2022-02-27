const GameModel = require("../../models/game.model");

module.exports = async () => {
  await GameModel.clearMains();
  await GameModel.clearAnswers();
  await GameModel.clearWinners();
};
