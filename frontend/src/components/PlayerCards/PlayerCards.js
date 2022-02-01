import React from "react";
import Card from "../Card/Card";
import useFetch from "react-fetch-hook";

const AnswerCards = () => {
  const { data } = useFetch("http://localhost:8001/api/cards/answers");

  return data;
};

const MainCards = () => {
  const { data } = useFetch("http://localhost:8001/api/cards/main");

  return data;
};

/**
 * PlayerCards component
 */
const PlayerCards = () => {
  const mainCardsData = MainCards();
  const answerCardsData = AnswerCards();

  return (
    <div className={"playerCards"}>
      {/* {mainCardsData?.map((element) => {
        return <Card data={element} />;
      })} */}
      {answerCardsData?.map((element) => {
        return <Card data={element} />;
      })}
      {/* <Card props={data} /> */}
      {/* <Card
        type={"ANSWER"}
        selected={true}
        onSelect={() => {
          alert("hej");
        }}
      />
      <Card size={"large"} />
      <Card type={"MAIN"} />
      <Card /> */}
    </div>
  );
};

export default PlayerCards;
