const UserModel = require("../../models/user.model");

module.exports = async (userId) => {
  console.log("co w userId", userId);
  const user = await UserModel.find(userId);

  if (!user) return null;

  const activeUser = await UserModel.updateActive(userId);

  return activeUser;
};
