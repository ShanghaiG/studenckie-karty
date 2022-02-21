const checkPlayers = require("./check-players");
const deletePlayer = require("./delete");
const findAll = require("./find-all");
const updateActive = require("./update-active");
const updatePoints = require("./update-points");
const findUser = require("./find");
const getAvailable = require("./get-available");
const updateWinnerPlayer = require("./update-winner-player");
const cleanUp = require("./clean-up");
const updatePlayer = require("./update");

module.exports = {
  checkPlayers,
  deletePlayer,
  findAll,
  updateActive,
  updatePoints,
  findUser,
  getAvailable,
  updateWinnerPlayer,
  cleanUp,
  updatePlayer,
};
