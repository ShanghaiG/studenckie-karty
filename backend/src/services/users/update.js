const UserModel = require("../../models/user.model");

module.exports = async (userId, data) => {
  if (!userId || !data) return null;

  const updateUser = UserModel.update(userId, {
    has_answered: data.has_answered,
  });
  if (!updateUser) return null;

  return updateUser;
};
