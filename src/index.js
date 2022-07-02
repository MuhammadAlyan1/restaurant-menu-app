import React from "react";
import ReactDom from "react-dom";
import { MenuList } from "./menuList";
import "./index.css";
function Restaurant() {
  return (
    <>
      <h1 className="main-heading">Our menu</h1>
      <MenuList />
    </>
  );
}

ReactDom.render(<Restaurant />, document.querySelector("#root"));
