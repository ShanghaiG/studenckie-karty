/** @format */

const {
  checkPlayers,
  cleanUp,
  findAll,
  updateActive,
  updatePoints,
  getAvailable,
  findUser,
} = require("@services/users");

module.exports = {
  validators: {},

  checkPlayers: async (req, res) => {
    const payload = await checkPlayers();
    res.status(200).json(payload);
  },

  index: async (req, res) => {
    const payload = await findAll();
    res.status(200).json(payload);
  },

  find: async (req, res) => {
    const payload = await findUser(req.params.user_id);
    res.status(200).json(payload);
  },

  getAvailable: async (req, res) => {
    const payload = await getAvailable();
    res.status(200).json(payload);
  },

  updateActive: async (req, res) => {
    const payload = await updateActive(req.params.user_id);
    res.status(200).json(payload);
  },

  points: async (req, res) => {
    const payload = await updatePoints(req.params.user_id);
    res.status(200).json(payload);
  },

  cleanUp: async (req, res) => {
    const payload = await cleanUp();
    res.status(200).json(payload);
  },
};
