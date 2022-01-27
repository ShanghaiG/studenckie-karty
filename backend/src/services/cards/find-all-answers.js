const CardModel = require("../../models/card.model");

module.exports = async () => {
  let cards = await CardModel.findAllAnswersCards();

  cards = cards.sort(() => Math.random() - 0.5);

  if (!cards.length) return [];

  return cards.slice(0, 6);
};
