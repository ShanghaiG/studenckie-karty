const UserModel = require("../../models/user.model");

module.exports = async (userId) => {
  const user = await UserModel.find(userId);
  if (!user) return null;

  console.log("co w user w updatePoints", user);
  const points = user.points + 5;
  console.log("co w points w updatePoints", points);

  const updatePoints = await UserModel.updatePoints(userId, points);

  return updatePoints;
};
