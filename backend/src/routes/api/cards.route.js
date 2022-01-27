/** @format */

const express = require("express");
const router = express.Router();
const wrap = require("@helpers/wrap.helper");
const cards = require("@controllers/cards.controller");

const PREFIX = "/cards";

/**
 *  @function GET /cards/main
 */
router.get(PREFIX + "/main", wrap(cards.main));

/**
 *  @function GET /cards/answers
 */
router.get(PREFIX + "/answers", wrap(cards.answers));

module.exports = router;
