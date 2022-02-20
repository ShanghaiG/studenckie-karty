const UserModel = require("../../models/user.model");
const GameModel = require("../../models/game.model");
const updatePoints = require("./update-points");

module.exports = async (round) => {
  if (!round) return null;

  const winnerGame = await GameModel.findWinner(round);
  if (!winnerGame) return null;

  const user = await UserModel.find(winnerGame.userId);

  if (!user) return null;

  await updatePoints(user.id);

  const winner = await UserModel.updateWinner(user.id, true);
  if (!winner) return null;

  return winner;
};
