import React from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { showSpinner } from "../reducers/shopReducer";
import { fetchItemsByType } from "../reducers/shopReducer";

export default function ShopNavbar() {
  const dispatch = useDispatch();

  const loadItems = async (items) => {
    await dispatch(showSpinner(true));
    await dispatch(fetchItemsByType(items));
    await dispatch(showSpinner(false));
  };

  return (
    <div className="shop-container">
      <Button variant="success" onClick={() => loadItems("clothes")}>
        Clothes
      </Button>{" "}
      <Button variant="warning" onClick={() => loadItems("bikes")}>
        Bikes
      </Button>{" "}
      <Button variant="danger" onClick={() => loadItems("trainers")}>
        Trainers
      </Button>{" "}
    </div>
  );
}
