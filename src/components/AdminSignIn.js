import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { adminLogin } from '../reducers/userReducer';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';

function AdminSignIn(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    let result = await dispatch(adminLogin({ email, password }));

    if (result.type === 'users/adminLogin/fulfilled') {
      props.history.push('/admin');
    }
  };

  const updateState = (e) => {
    if (e.target.type === 'password') {
      setPassword(e.target.value);
    } else {
      setEmail(e.target.value);
    }
  };

  let loginSuccessful = useSelector((state) => state.users.authenticated);
  console.log(loginSuccessful);

  return (
    <div className="form">
      <Form
        onSubmit={(e) => {
          handleLogin(e);
        }}
      >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            onChange={(e) => updateState(e)}
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => updateState(e)}
            placeholder="Password"
          />
          {loginSuccessful === false && <p>Log in unsuccessful</p>}
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default withRouter(AdminSignIn);
