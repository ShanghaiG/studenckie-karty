import React from "react";
import useGameStageWaiting from "./GameStageWaiting.hook";
import Players from "../../Players";
import Split from "../../Layouts/Split";

const GameStageWaiting = () => {
  const {} = useGameStageWaiting();
  const players=[{
      id:1,firstName:"Jan", lastName:"Kolasky",score:22,admin:true,answer:false, winner:false
  },{
      id:2,firstName:"Jan", lastName:"Kolasky2",score:33,admin:false,answer:true, winner:false
  },{
      id:3,firstName:"Jan", lastName:"Kolasky3",score:55,admin:false,answer:false, winner:false
  },{
      id:4,firstName:"Jan", lastName:"Kolasky4",score:23,admin:false,answer:true, winner:false
  },{
      id:5,firstName:"Jan", lastName:"Kolasky5",score:88,admin:false,answer:false, winner:true
  }]
  return (
    <Split footer={<React.Fragment>footer</React.Fragment>}>
      <h1>Gra zaraz się rozpocznie</h1>
        <Players players={players}/>
      {/* <form
      className={"startForm"}
      onSubmit={(e) => {
        dispatchUser();
        e.preventDefault();
        checkForm();
      }}
    >
      <input
        type={"text"}
        value={code}
        onChange={(e) => {
          dispatch(setCode(e.target.value));
        }}
      />
      <button type={"submit"}>&gt;</button>
    </form> */}
    </Split>
  );
};

export default GameStageWaiting;
