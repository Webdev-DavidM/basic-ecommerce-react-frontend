import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import Shop from "./Shop";
import Login from "./components/Login";
import AdminSignIn from "./components/AdminSignIn";
import ModalSpinner from "./ModalSpinner";
import Register from "./components/Register";
import Navbar from "./components/NavBar";
import Admin from "./components/Admin";
import Cart from "./components/Cart";
import Modal from "./ModalBox";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

function App() {
  // the useSelector hook returns a function and has access to the global state in redux,
  // so below I am returning the authenticated user into the adminAuthenticated variable
  let adminAuthenticated = useSelector(
    (state) => state.users.adminAuthenticated
  );
  let showModal = useSelector((state) => state.shop.showModal);
  let showSpinner = useSelector((state) => state.shop.showSpinner);
  let modal = showModal ? <Modal /> : null;
  let spinner = showSpinner ? <ModalSpinner /> : null;

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        {spinner}
        {modal}
        <Navbar />
      </div>
      <Route exact path="/" component={Shop} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/admin-sign-in" component={AdminSignIn} />
      {/* Only logged in admin should be able to access this route, so it will only
      render if the user is signed in */}
      <Route exact path="/admin">
        {adminAuthenticated ? <Admin /> : <Redirect from="/admin" to="/" />}
      </Route>
      <Route exact path="/cart" component={Cart} />
    </Router>
  );
}

export default App;
