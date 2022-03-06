import React,{useState} from "react";

function ListingCard({item,cleans}) {
const [star, setStar]=useState(false)

function starFill(){
  setStar(e=> !e)
}

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={item.image} alt={"description"} />
      </div>
      <div onClick={starFill} className="details">

        {star ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}

        <strong>{item.description}</strong>
        <span> · {item.location}</span>

        <button onClick={()=>cleans(item)} className="emoji-button delete">🗑</button>

      </div>
    </li>
  );
}

export default ListingCard;
