const UserModel = require("../../models/user.model");
const GameModel = require("../../models/game.model");

module.exports = async (round) => {
  if (!round) return null;

  const winnerGame = await GameModel.findWinner(round);
  if (!winnerGame) return null;

  const user = await UserModel.find(winnerGame.userId);

  if (!user) return null;

  const winner = await UserModel.updateWinner(user.id, true);
  if (!winner) return null;

  return winner;
};
