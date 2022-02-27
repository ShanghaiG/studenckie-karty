/** @format */

const { findAllMainCards, findAllAnswersCards } = require("@services/cards");

module.exports = {
  validators: {},

  main: async (req, res) => {
    const payload = await findAllMainCards();
    res.status(200).json(payload);
  },

  answers: async (req, res) => {
    const payload = await findAllAnswersCards();
    res.status(200).json(payload);
  },
};
