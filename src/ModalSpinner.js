import React from "react";
import { CircularProgress } from "@material-ui/core";

function modalSpinner(props) {
  return (
    <div className="modal-spinner">
      <div className="container">
        <CircularProgress size={100} />
      </div>
    </div>
  );
}

export default modalSpinner;
