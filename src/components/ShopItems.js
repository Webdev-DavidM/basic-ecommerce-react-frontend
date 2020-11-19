import React from "react";
import { useSelector, useDispatch } from "react-redux";
import cyclist from "../cycle.jpg";
import Button from "react-bootstrap/Button";
import { addToCart } from "../reducers/userReducer";

export default function ShopItems() {
  const Items = useSelector((state) => state.shop.items);
  const dispatch = useDispatch();

  const addItemToCart = async (id, name, price) => {
    await dispatch(addToCart({ id, name, price }));
  };

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
          <p>{item.description}</p>
          <img
            src={`https://my-basic-ecommerce-site.herokuapp.com/${item.image}`}
            alt=""
          />
          <Button
            style={{ display: "block", margin: "10px auto" }}
            variant="danger"
            onClick={(e) => addItemToCart(item._id, item.name, item.price)}
          >
            Add item to cart
          </Button>{" "}
        </div>
      );
    });
  }

  return <>{itemsJSX} </>;
}
