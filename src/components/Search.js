import React,{useState} from "react";

function Search({hunt}) {

const [find, setFind]=useState("")



  function handleSubmit(e) {
    e.preventDefault();
    hunt(find)
    console.log("submitted");
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={find}
        onChange={(e) => setFind(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
