/** @format */

const express = require("express");
const router = express.Router();
const wrap = require("@helpers/wrap.helper");
const test = require("@controllers/test.controller");

const PREFIX = "/test";

/**
 *  @function GET /test
 */
router.get(
  PREFIX,
  //   test.validators.index,
  //   passport.authenticate("clientAuth", { session: false }),
  wrap(test.index)
);

module.exports = router;
