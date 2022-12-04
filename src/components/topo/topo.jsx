import React from "react";
import MenuSuperior from "../menu superior/menuSuperior";
import "../../App.css";

const Topo = (props) => {
  return (
    <div>
      <MenuSuperior />
      <div className="topo">{props.children}</div>
    </div>
  );
};

export default Topo;
