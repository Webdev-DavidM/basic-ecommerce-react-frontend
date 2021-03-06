import React from "react";
import Button from "react-bootstrap/Button";
import { showModal } from "./reducers/shopReducer";
import { useDispatch } from "react-redux";

function ModalBox(props) {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(showModal());
  };

  return (
    <div className="modal">
      <div className="container">
        <h4>How to use and navigate this site</h4>
        <p>
          This e-commerce site is built with the latest version of Redux and
          uses React useSelector and useDispatch hooks to update the state in
          Redux. It connects to a backend API created with Express and MongoDB.
          The admin login section allows you to create products and add images
          which are dealt with on the server using the multer npm package.{" "}
          <hr></hr>
          <p>Login info</p>
          <hr></hr> Admin login: username: admin@company.com, password: admin123
          <hr></hr>Customer login: username: user@shop.com, password: buy1
        </p>

        <Button variant="primary" onClick={() => closeModal()}>
          OK
        </Button>
      </div>
    </div>
  );
}

export default ModalBox;
