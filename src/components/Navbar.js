import React from "react";
import SearchBar from "./SearchBar";
import "./main.scss";
function Navbar(props) {
  return (
    <div className="navbar">
      <div className="logo">
        <i class="youtube icon"></i>
      </div>
      <div className="input">
        <SearchBar getData={props.getData} />
      </div>
      <div className="personal">
        <i class="video icon"></i>
        <i class="bell icon"></i>
        <div className="mine_logo">J</div>
      </div>
    </div>
  );
}

export default Navbar;
