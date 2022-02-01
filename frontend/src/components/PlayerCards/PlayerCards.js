import React from "react";
import Card from "../Card/Card";


/**
 * PlayerCards component
 */
const PlayerCards = () => {
    return (
        <div className={"playerCards"}>
            <Card type={"ANSWER"}/>
            <Card type={"ANSWER"} selected={true} onSelect={()=>{alert("hej")}}/>
            <Card size={"large"}/>
            <Card/>
            <Card/>
        </div>
    );
};


export default PlayerCards;