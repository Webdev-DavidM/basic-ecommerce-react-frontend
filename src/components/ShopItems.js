import React from "react";
import { useSelector } from "react-redux";
import cyclist from "../cycle.jpg";

export default function ShopItems() {
  const Items = useSelector((state) => state.shop.items);
  let itemsJSX = (
    <div className="landing-page">
      <h1> Welcome to the exercise shop, pick a category</h1>
      <img src={cyclist} className="cyclist" alt="cycle"></img>
    </div>
  );

  if (Items.length > 0) {
    itemsJSX = Items.map((item) => {
      return (
        <div className="flex-item" key={item._id}>
          <h2>{item.name}</h2>
          <h3>£{item.price}</h3>
          <img
            src={`https://my-basic-ecommerce-site.herokuapp.com/${item.image}`}
            alt=""
          />
          <p>{item.description}</p>
        </div>
      );
    });
  }

  return <>{itemsJSX} </>;
}
