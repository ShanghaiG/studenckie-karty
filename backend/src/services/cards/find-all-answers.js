const CardModel = require("../../models/card.model");

module.exports = async () => {
  console.log("co w cards1");
  const cards = await CardModel.findAllAnswersCards();
  console.log("co w cards", cards);
  if (!cards.length) return [];

  return cards;
};
