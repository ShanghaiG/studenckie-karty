const UserModel = require("../../models/user.model");

module.exports = async () => {
  let users = await UserModel.getAvailable();

  if (!users.length) return [];

  users = users.sort(() => Math.random() - 0.5);

  return users[0];
};
