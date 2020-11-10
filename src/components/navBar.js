import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { signOut } from '../reducers/userReducer';

function Navbar({ history }) {
  const userName = useSelector((state) => state.users.name);
  const authenticated = useSelector((state) => state.users.authenticated);
  const dispatch = useDispatch();
  const signOutNow = () => {
    dispatch(signOut());
    history.push('/');
  };

  return (
    <>
      {!authenticated ? (
        <Container className="nav-bar" fluid>
          <Button
            variant="outline-secondary"
            onClick={() => history.push('/admin-sign-in')}
          >
            Admin sign-in
          </Button>
          <Button
            variant="outline-primary"
            onClick={() => history.push('/login')}
          >
            Customer sign-in
          </Button>
          <Button
            variant="outline-secondary"
            onClick={() => history.push('/register')}
          >
            Register
          </Button>
        </Container>
      ) : (
        <>
          <div>hello {userName}</div>
          <Button variant="outline-secondary" onClick={() => signOutNow()}>
            Sign-out
          </Button>
        </>
      )}
    </>
  );
}

export default withRouter(Navbar);
