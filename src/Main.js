import React from "react";
import src from "./img/bg.png";

const Main = ({ ...props }) => {
  return (
    <img src={src} style={{ width: "600px", height: "auto" }} {...props} />
  );
};

export default Main;
