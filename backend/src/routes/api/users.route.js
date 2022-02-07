/** @format */

const express = require("express");
const router = express.Router();
const wrap = require("@helpers/wrap.helper");
const users = require("@controllers/users.controller");

const PREFIX = "/users";

/**
 *  @function GET /users/check-players
 */
router.get(PREFIX + "/check-players", wrap(users.checkPlayers));

/**
 *  @function GET /users/get-available
 */
router.get(PREFIX + "/get-available", wrap(users.getAvailable));

/**
 *  @function GET /users
 */
router.get(PREFIX, wrap(users.index));

/**
 *  @function GET /users/user/:user_id
 */
router.get(PREFIX + "/user/:user_id", wrap(users.find));

/**
 *  @function PUT /users/update-active/:user_id
 */
router.put(PREFIX + "/update-active/:user_id", wrap(users.updateActive));

/**
 *  @function PUT /users/update-active/:user_id/points
 */
router.put(PREFIX + "/update-active/:user_id/points", wrap(users.points));

/**
 *  @function DELETE /users/clean-up
 */
router.delete(PREFIX + "/clean-up", wrap(users.cleanUp));

module.exports = router;
