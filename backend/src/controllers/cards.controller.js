/** @format */

const { body, param, validationResult } = require("express-validator");
const { ValidatorException } = require("@exceptions");

const { findAllMainCards, findAllAnswersCards } = require("@services/cards");
const { findAnswers } = require("../services/game");

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
