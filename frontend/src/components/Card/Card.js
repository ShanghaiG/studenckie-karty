import React from "react";

/**
 * PlayerCards component
 */
const Card = (data) => {
  const type = data.data.type;
  const id = data.data.id;
  const cardText = data.data.cardText;

  const { selected, size, onSelect } = data;

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
    <div className={"card"} data-size={size}>
      <header className={"card__header"}>KARTA GŁÓWNA</header>
      <main className={"card__content"}>{cardText}</main>
      <footer className={"card__footer"}>Studenckie Karty</footer>
    </div>
  );
};

Card.defaultProps = {
  size: "normal",
};

export default Card;
