const CardModel = require("../../models/card.model");

module.exports = async (id) => {
  if (!id) return null;

  let card = await CardModel.findMain(id);

  return card;
};
