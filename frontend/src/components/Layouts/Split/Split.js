import React from "react";
import useSplit from "./Split.hook";

const Split = (props) => {
  const { footer, children } = props;
  const {} = useSplit();

  return (
    <div className={"splitLayout"}>
      <main className={"splitLayout__main"}>
        <div>{children}</div>
      </main>
      <footer className={"splitLayout__footer"}>
        <div>{footer}</div>
      </footer>
    </div>
  );
};

export default Split;
