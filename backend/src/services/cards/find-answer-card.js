const CardModel = require("../../models/card.model");

module.exports = async (id) => {
  if (!id) return null;
  let card = await CardModel.findAnswer(id);

  return card;
};
