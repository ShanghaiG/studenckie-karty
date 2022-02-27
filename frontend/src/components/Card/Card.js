import React from "react";

/**
 * Single card component
 */
const Card = (data) => {
  const type = data.data.type;
  const cardText = data.data.cardText;

  let { selected, size, onSelect } = data;

  if (type === "ANSWER") {
    return (
      <button
        type={"button"}
        className={"card card--answer"}
        data-selected={selected}
        data-size={size}
        onClick={() => {
          onSelect();
        }}
      >
        <header className={"card__header"}>KARTA ODPOWIEDZI</header>
        <main className={"card__content"}>{cardText}</main>
        <footer className={"card__footer"}>Studenckie Karty</footer>
      </button>
    );
  }

  return (
    <button
      type={"button"}
      className={"card card--main-answer"}
      data-selected={selected}
      data-size={size}
      onClick={() => {
        onSelect();
      }}
    >
      <header className={"card__header"}>KARTA GŁÓWNA</header>
      <main className={"card__content"}>{cardText}</main>
      <footer className={"card__footer"}>Studenckie Karty</footer>
    </button>
  );
};

Card.defaultProps = {
  size: "normal",
};

export default Card;
