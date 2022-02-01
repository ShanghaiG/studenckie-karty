import React from "react";


/**
 * PlayerCards component
 */
const Card = (props) => {
    const {type, selected, size, onSelect}=props;

    if(type==="ANSWER"){
        return (
            <button type={"button"} className={"card card--answer"} data-selected={selected} data-size={size} onClick={()=>{onSelect()}}>
                <header className={"card__header"}>
                    KARTA ODPOWIEDZI
                </header>
                <main className={"card__content"}>
                    Panie profesorze, co dostałem?
                </main>
                <footer className={"card__footer"}>
                    Studenckie Karty
                </footer>
            </button>
        );
    }

    return (
        <div className={"card"} data-size={size}>
            <header className={"card__header"}>
                KARTA GŁÓWNA
            </header>
            <main className={"card__content"}>
                Panie profesorze, co dostałem?
            </main>
            <footer className={"card__footer"}>
                Studenckie Karty
            </footer>
        </div>
    );

};

Card.defaultProps = {
    size:"normal"
}

export default Card;