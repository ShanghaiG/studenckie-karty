const UserModel = require("../../models/user.model");

module.exports = async () => {
  let findUsers = await UserModel.findAll();

  if (!findUsers || findUsers.length !== 4) return null;

  if (findUsers.some((user) => user.hasAnswered === true)) {
    let users = await UserModel.cleanUp();
    console.log("co w users", users);
    if (!users) return null;

    let randomUserId = Math.floor(Math.random() * 4) + 1;
    console.log("Co w randomUserId", randomUserId);
    await UserModel.setLeader(randomUserId);

    return users;
  }

  return null;
};
