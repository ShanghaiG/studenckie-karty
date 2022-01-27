exports.seed = function (knex) {
  return knex("main_cards")
    .del()
    .then(function () {
      return knex("main_cards").insert([
        { id: 1, type: "MAIN", card_text: "Panie profesorze, co dostałem?..." },
        { id: 2, type: "MAIN", card_text: "Ostatnim razem na wykładzie..." },
        {
          id: 3,
          type: "MAIN",
          card_text: "Panie profesorze, czy będzie szósty termin?...",
        },
        { id: 4, type: "MAIN", card_text: "Kiedy zdalne?..." },
        { id: 5, type: "MAIN", card_text: "Mamy dzisiaj zajęcia z?..." },
        {
          id: 6,
          type: "MAIN",
          card_text: "Zrobiłaś/eś z ostatnich labów to...",
        },
        {
          id: 7,
          type: "MAIN",
          card_text: "Tym razem w łazience był papier i...",
        },
        { id: 8, type: "MAIN", card_text: "WEEIA dla..." },
        { id: 9, type: "MAIN", card_text: "Lepiej..." },
        { id: 10, type: "MAIN", card_text: "Angielski to nigdy..." },
        {
          id: 11,
          type: "MAIN",
          card_text: "Nie wiem jak dużo wam tłumaczyć bo...",
        },
        { id: 12, type: "MAIN", card_text: "Tu mamy instrukcję do..." },
        { id: 13, type: "MAIN", card_text: "Jak zaliczyć..." },
        { id: 14, type: "MAIN", card_text: "Chłop leży a jemu..." },
        { id: 15, type: "MAIN", card_text: "Teraz pokażę wam jak..." },
        { id: 16, type: "MAIN", card_text: "Java jest językiem..." },
        { id: 17, type: "MAIN", card_text: "No to dziś zaczynamy..." },
        { id: 18, type: "MAIN", card_text: "Nigdy nie ufajcie..." },
        {
          id: 19,
          type: "MAIN",
          card_text:
            "Najważniejszym stwierdzeniem dzisiejszych wykładów jest...",
        },
        {
          id: 20,
          type: "MAIN",
          card_text: "Koledzy, których nie ma powinni...",
        },
        {
          id: 21,
          type: "MAIN",
          card_text: "Przepraszam za 75minutowe spóźnienie, ale...",
        },
        {
          id: 22,
          type: "MAIN",
          card_text: "Nie sprawdzam materiałów, bo domyślam się, że...",
        },
        { id: 23, type: "MAIN", card_text: "Jako wykładowca nigdy..." },
        { id: 24, type: "MAIN", card_text: "Jako student nigdy..." },
        {
          id: 25,
          type: "MAIN",
          card_text: "W przyszłości chciałbym pracować jako...",
        },
        {
          id: 26,
          type: "MAIN",
          card_text: "Oczywiście, że partia rządząca jest dobra, gdyż...",
        },
        {
          id: 27,
          type: "MAIN",
          card_text: "Dzisiejszy współczynnik inflacji przekroczył...",
        },
        { id: 28, type: "MAIN", card_text: "Nigdy nie dostałem..." },
        { id: 29, type: "MAIN", card_text: "A propo DANTE, to..." },
        {
          id: 30,
          type: "MAIN",
          card_text:
            "Uwielbiam wszystkie protokoły, a przede wszystkim TCP, HTTP oraz...",
        },
        { id: 31, type: "MAIN", card_text: "Chciałbym studiować razem z ..." },
        { id: 32, type: "MAIN", card_text: "Chciałbym studiować ..." },
        { id: 33, type: "MAIN", card_text: "A po obronie..." },
      ]);
    });
};
