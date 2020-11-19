import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { withRouter } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { signOut } from "../reducers/userReducer";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Navbar({ history }) {
  const authenticated = useSelector((state) => state.users.authenticated);
  const cart = useSelector((state) => state.users.cart);
  const name = useSelector((state) => state.users.name);
  const adminAuthenticated = useSelector(
    (state) => state.users.adminAuthenticated
  );
  const dispatch = useDispatch();
  const signOutNow = () => {
    dispatch(signOut());
    history.push("/");
  };

  return (
    <Container className="nav-bar" fluid>
      {!authenticated ? (
        <>
          <Button
            variant="outline-secondary"
            onClick={() => history.push("/admin-sign-in")}
          >
            Admin sign-in
          </Button>
          <Button
            variant="outline-primary"
            onClick={() => history.push("/login")}
          >
            Customer sign-in
          </Button>
          <Button
            variant="outline-secondary"
            onClick={() => history.push("/register")}
          >
            Register
          </Button>
          <Button
            variant="outline-secondary"
            style={{ position: "relative" }}
            onClick={() => history.push("/cart")}
          >
            <ShoppingCartIcon style={{ height: "30px" }} />
            <p
              style={{
                color: "red",
                display: "inline",
                position: "absolute",
                left: "+5px",
                top: "8px",
              }}
            >
              {cart.length}
            </p>
            Cart
          </Button>
        </>
      ) : (
        <>
          {adminAuthenticated ? (
            <>
              <Button
                variant="outline-secondary"
                onClick={() => history.push("/admin")}
              >
                Create another product
              </Button>
            </>
          ) : null}

          <h3> Hello {name} </h3>
          <Button variant="outline-secondary" onClick={() => signOutNow()}>
            Sign-out
          </Button>
          <Button
            variant="outline-secondary"
            style={{ position: "relative" }}
            onClick={() => history.push("/cart")}
          >
            <ShoppingCartIcon style={{ height: "30px" }} />
            <p
              style={{
                color: "red",
                display: "inline",
                position: "absolute",
                left: "+5px",
                top: "8px",
              }}
            >
              {cart.length}
            </p>
            Cart
          </Button>
        </>
      )}
    </Container>
  );
}

export default withRouter(Navbar);
