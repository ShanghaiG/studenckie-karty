const UserModel = require("../../models/user.model");

module.exports = async () => {
  let users = await UserModel.findAll();

  if (!users.length) return false;

  let counter = 0;

  for (const user of users) {
    if (user.isActive) counter++;
  }

  if (counter === 4) {
    return true;
  }

  return false;
};
