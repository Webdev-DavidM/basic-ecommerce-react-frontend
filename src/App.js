import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { useSelector } from 'react-redux';
import Shop from './Shop';
import Login from './components/Login';
import AdminSignIn from './components/AdminSignIn';
import Register from './components/Register';
import Navbar from './components/navBar';
import Admin from './components/Admin';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

function App() {
  useEffect(() => {
    // const bikes = async () => {
    //   try {
    //     let data = await axios.get('https://my-basic-ecommerce-site.herokuapp.com/shop/bikes');
    //     console.log(data.data[0].name);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // bikes();
  }, []);

  let adminAuthenticated = useSelector(
    (state) => state.users.adminAuthenticated
  );




  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
  
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
    </Router>
  );
}

export default App;
