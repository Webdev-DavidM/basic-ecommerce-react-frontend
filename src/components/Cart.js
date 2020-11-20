import React from "react";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";

Cart.propTypes = {};

function Cart(props) {
  const cartItems = useSelector((state) => state.users.cart);
  let JSXitems = <h3>Nothing in cart</h3>;
  if (cartItems.length > 0) {
    JSXitems = cartItems.map((item) => {
      return (
        <div className="cart-item" key={item.id}>
          <h3>{item.name}</h3>
          <h5>Price :£{item.price}</h5>
        </div>
      );
    });
  }
  return (
    <div className="cart">
      <h1>Cart</h1>
      <div className="cart-flex-container">{JSXitems}</div>
      {cartItems.length ? (
        <div className="button-container">
          <Button
            variant="primary"
            onClick={() => props.history.push("/register")}
          >
            Buy
          </Button>
          <Button variant="danger" onClick={() => props.history.push("/")}>
            Keep Shopping
          </Button>
        </div>
      ) : null}
    </div>
  );
}

export default Cart;
