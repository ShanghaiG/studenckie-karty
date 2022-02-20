import React from "react";

/**
 * PlayerCards component
 */
const Card = (data) => {
  const type = data.data.type;
  const id = data.data.id;
  const cardText = data.data.cardText;

  let { selected, size, onSelect } = data;

  // console.log("co w onSelect jest", onSelect());
  // console.log("co w selected jest", selected);
  // // selected = onSelect() ? true : false;

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
      {/* <div className={"card"} data-size={size}> */}
      <header className={"card__header"}>KARTA GŁÓWNA</header>
      <main className={"card__content"}>{cardText}</main>
      <footer className={"card__footer"}>Studenckie Karty</footer>
    </button>
    // </div>
  );
};

Card.defaultProps = {
  size: "normal",
};

export default Card;
