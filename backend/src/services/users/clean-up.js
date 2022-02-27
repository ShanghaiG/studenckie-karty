const UserModel = require("../../models/user.model");

module.exports = async () => {
  let findUsers = await UserModel.findAll();

  if (!findUsers || findUsers.length !== 4) return null;

  if (findUsers.some((user) => user.hasAnswered === true)) {
    let users = await UserModel.cleanUp();

    if (!users) return null;

    let randomUserId = Math.floor(Math.random() * 4) + 1;

    await UserModel.setLeader(randomUserId);

    return users;
  }

  return null;
};
