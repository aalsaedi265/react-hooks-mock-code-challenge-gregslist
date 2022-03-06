import React from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import { useEffect, useState } from "react/cjs/react.production.min";

function App() {
  const  [items, setItems]=useState([])
  const [search, setSearch]=useState("")


  let rage=items.filter(x=> x.description.toLowerCase().includes(search.toLowerCase() ) )


  useEffect(()=>{
    fetch(`http://localhost:6001/listings`)
    .then(r=> r.json())
    .then(d=>setItems(d))
  },[])

  function cleans(e){
    let purge= items.filter(x=> x !== e)
    setItems(purge)
  }
  function destroy(x){
    fetch(`http://localhost:6001/listings/${x.id}`,{
      method: 'DELETE' 
    })
    cleans(x)
  }
  
  return (
    <div className="app">
      <Header setSearch={setSearch}/>
      <ListingsContainer cleans={destroy} Items={rage}/>
    </div>
  );
}

export default App;
