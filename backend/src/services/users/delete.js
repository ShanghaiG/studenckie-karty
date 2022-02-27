const UserModel = require("../../models/user.model");

module.exports = async () => {
  let users = await UserModel.findAll();

  if (!users.length) return [];

  await UserModel.delete();
};
