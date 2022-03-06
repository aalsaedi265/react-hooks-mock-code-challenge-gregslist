import React,{useState} from "react";
import Search from "./Search";

function Header({setSearch}) {


  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search hunt={setSearch} />
    </header>
  );
}

export default Header;
