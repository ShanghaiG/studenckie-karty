const checkPlayers = require("./check-players");
const cleanUp = require("./delete");
const findAll = require("./find-all");
const updateActive = require("./update-active");
const updatePoints = require("./update-points");
const findUser = require("./find");
const getAvailable = require("./get-available");
const updateWinnerPlayer = require("./update-winner-player");

module.exports = {
  checkPlayers,
  cleanUp,
  findAll,
  updateActive,
  updatePoints,
  findUser,
  getAvailable,
  updateWinnerPlayer,
};
