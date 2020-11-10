import React from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { fetchItemsByType } from '../reducers/shopReducer';

export default function ShopNavbar() {
  const dispatch = useDispatch();
  return (
    <div className="shop-container">
      <Button
        variant="success"
        onClick={() => dispatch(fetchItemsByType('clothes'))}
      >
        Clothes
      </Button>{' '}
      <Button
        variant="warning"
        onClick={() => dispatch(fetchItemsByType('bikes'))}
      >
        Bikes
      </Button>{' '}
      <Button
        variant="danger"
        onClick={() => dispatch(fetchItemsByType('trainers'))}
      >
        Trainers
      </Button>{' '}
    </div>
  );
}
