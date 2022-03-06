import React,{useState} from "react";
import ListingCard from "./ListingCard";


function ListingsContainer({Items,cleans}) {



  let itemCars=Items.map(e=>(
    <ListingCard key={e.id} cleans={cleans} item={e}/>
  ))


  return (
    <main>
      <ul className="cards">
        {itemCars}
      </ul>
    </main>
  );
}

export default ListingsContainer;
