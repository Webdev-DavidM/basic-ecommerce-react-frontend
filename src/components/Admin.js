import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';
import { fetchItemsByType } from '../reducers/shopReducer';

const Admin = ({ history }) => {
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const dispatch = useDispatch();

  const submitFormData = async () => {
    // Here I am posting the data with a multipart/form data so multer recognises it at the back-end and will upload the image to the multer uploads folder

    const formData = new FormData();
    // Note you have to append each key/value pair individually
    formData.append('productImage', image);
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    let res = await Axios.post('shop/create', formData, config);
    if (res.status === 201) {
      history.push(`/`);
      dispatch(fetchItemsByType(category));
    }
  };

  const setFormState = (e) => {
    let type = e.target.getAttribute('id');
    switch (type) {
      case 'category':
        return setCategory(e.target.value);
      case 'name':
        return setName(e.target.value);
      case 'price':
        return setPrice(e.target.value);
      case 'description':
        return setDescription(e.target.value);
      case 'image':
        return setImage(e.target.files[0]);
      default:
        return;
    }
  };

  return (
    <div className="admin-form-container">
      <h3>
        Please create the product below to add it to the website and database
      </h3>
      {/* <img src="aac5be8cc2723b9ae78ab658b08871a6" alt="" /> */}
      <Form>
        <Form.Group controlId="category" onChange={(e) => setFormState(e)}>
          <Form.Label>Product category</Form.Label>
          <Form.Control as="select" defaultValue="Choose...">
            <option>Choose a product category </option>
            <option value="bikes">Bike</option>
            <option value="trainers">Trainers</option>
            <option value="clothes">Clothes</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="name" onChange={(e) => setFormState(e)}>
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter product name" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="price" onChange={(e) => setFormState(e)}>
          <Form.Label>Price</Form.Label>
          <Form.Control type="price" placeholder="enter a price" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Group controlId="description" onChange={(e) => setFormState(e)}>
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form.Group>
        <Form.Group controlId="image" onChange={(e) => setFormState(e)}>
          <Form.File label="Please upload a product photo" />
        </Form.Group>
      </Form>
      <Button onClick={() => submitFormData()} variant="primary" type="submit">
        Submit
      </Button>
    </div>
  );
};

export default withRouter(Admin);
