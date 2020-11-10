import React from 'react';
import { useSelector } from 'react-redux';

export default function ShopItems() {
  const Items = useSelector((state) => state.shop.items);
  let itemsJSX = null;

  if (Items.length > 0) {
    console.log(Items);
    itemsJSX = Items.map((item) => {
      return (
        <div className="flex-item" key={item.id}>
          <h2>{item.name}</h2>
          <h3>£{item.price}</h3>
          <img src={item.image} alt="" />
          <p>{item.description}</p>
        </div>
      );
    });
  }

  return <>{itemsJSX} </>;
}
