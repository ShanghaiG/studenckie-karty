const UserModel = require("../../models/user.model");

module.exports = async (userId) => {
  const user = await UserModel.find(userId);

  const users = await UserModel.findAll();

  if (!user) return null;

  let data = {
    userId,
    isLeader: false,
  };

  if (!users.length) {
    data.isLeader = true;
  }

  const activeUser = await UserModel.updateActive(data);

  return activeUser;
};
