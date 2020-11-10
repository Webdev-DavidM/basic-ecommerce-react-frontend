import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { userRegister } from '../reducers/userReducer';
import { withRouter } from 'react-router-dom';

function Register(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleRegister = async (e) => {
    e.preventDefault();
    let result = await dispatch(userRegister({ email, password, name }));

    if (result.type === 'users/userRegister/fulfilled') {
      props.history.push('/');
    }
  };

  const updateState = (e) => {
    if (e.target.type === 'password') {
      setPassword(e.target.value);
    }
    if (e.target.type === 'email') {
      setEmail(e.target.value);
    } else {
      setName(e.target.value);
    }
  };

  return (
    <div className="form">
      <Form
        onSubmit={(e) => {
          handleRegister(e);
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
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            onChange={(e) => updateState(e)}
            placeholder="Name"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default withRouter(Register);
