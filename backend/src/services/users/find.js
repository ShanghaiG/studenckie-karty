const UserModel = require("../../models/user.model");

module.exports = async (userId) => {
  let user = await UserModel.find(userId);

  if (!user) return null;

  return user;
};
