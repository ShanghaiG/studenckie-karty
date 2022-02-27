const UserModel = require("../../models/user.model");

module.exports = async () => {
  let user = await UserModel.findWinner();

  if (!user) return null;

  return user;
};
