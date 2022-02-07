const UserModel = require("../../models/user.model");

module.exports = async (userId) => {
  const user = await UserModel.find(userId);

  if (!user) return null;

  const points = user.points + 10;

  const updatePoints = await UserModel.updatePoints(userId, points);

  return updatePoints;
};
