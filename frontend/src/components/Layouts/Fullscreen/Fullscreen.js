import React from "react";
import useFullscreen from "./Fullscreen.hook";

const Fullscreen = (props) => {
    const {children} = props;
    const {} = useFullscreen();
    return <div className={"fullscreen"}>
        <div className={"fullscreen__inner"}>{children}</div>
    </div>
};

export default Fullscreen;
