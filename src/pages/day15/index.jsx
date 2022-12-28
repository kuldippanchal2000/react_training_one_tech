/* eslint-disable no-alert */
/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable camelcase */
/* eslint-disable no-underscore-dangle */

import React, { useEffect, useState } from 'react';
import { Card, ListGroup, Modal } from 'react-bootstrap';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import './index.scss';
import { addUser, deleteUser, loadUsers, updateUser } from '../../redux/actions/actions';
import Loader from '../../component/loader';

const formValidation = Yup.object().shape({
  first_name: Yup.string().trim().required('FirstName Required*'),
  last_name: Yup.string().trim().required('LastName Required*'),
  email: Yup.string().trim().required('Email required*'),
  city: Yup.string().trim().required('City name required*'),
  state: Yup.string().trim().required('State name required*'),
  country: Yup.string().trim().required('Country name required*'),
  department: Yup.string().trim().required('please select your department!*'),
  gender: Yup.string().trim().required('A radio option is required*'),
});

toast.configure();
function Day15() {
  const [edit, setEdit] = useState(false);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [showDelete, setShowDelete] = useState(false);
  const [deleteId, setdeleteId] = useState();

  useEffect(() => {
    if (!showDelete) {
      setdeleteId('');
    }
  }, [showDelete]);
  const deleteClose = () => {
    setShowDelete(false);
  };
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  // For add users
  const [add, setAdd] = useState({
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    city: '',
    state: '',
    country: '',
    department: '',
    gender: '',
  });

  // for update the user
  const handleUpdate = (user) => {
    setEdit(true);
    handleShow();
    setAdd({
      id: user._id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      city: user.city,
      state: user.state,
      country: user.country,
      department: user.department,
      gender: user.gender,
    });
  };
  const handleDeleteId = (id) => {
    setdeleteId(id);
    setShowDelete(true);
  };
  // for delete the user.
  const handleDelete = (id1) => {
    dispatch(deleteUser(id1));
    toast('User deleted successfully', { position: toast.POSITION.TOP_RIGHT });
    deleteClose(true);
  };

  const emptyData = () => {
    setAdd({
      id: '',
      first_name: '',
      last_name: '',
      email: '',
      city: '',
      state: '',
      country: '',
      department: '',
      gender: '',
    });
    setEdit(false);
    handleShow();
  };
  return (
    <div>
      <div className="text-center mt-5">
        <h2>Add new user here!</h2>
        <Button variant="contained" color="primary" onClick={emptyData}>
          Add User
        </Button>
      </div>
      <div>
        <Modal show={show} className="my-modal" onHide={handleClose}>
          <Modal.Header closeButton className="mymodal-head">
            <Modal.Title className="mymodal-title">
              <h4>Sign-Up</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="mymodal-body">
            <Formik
              initialValues={add}
              validationSchema={formValidation}
              onSubmit={(values) => {
                if (edit === true) {
                  setTimeout(() => {
                    dispatch(updateUser(values));
                    toast('User updated successfully', { position: toast.POSITION.TOP_RIGHT });
                    setShow(false);
                  }, 1000 * 3);
                } else {
                  setTimeout(() => {
                    dispatch(addUser(values));
                    toast('User added successfully', { position: toast.POSITION.TOP_RIGHT });
                    setShow(false);
                  }, 1000 * 3);
                }
              }}
            >
              {({ errors, touched, handleSubmit, handleChange, values }) => (
                <Form onSubmit={handleSubmit} className="day12-form-body">
                  <div className="form-group mb-3 row">
                    <label className="col-sm-4 h5 text-dark">FirstName</label>
                    <input
                      className="field col-sm-8"
                      type="text"
                      name="first_name"
                      value={values.first_name}
                      onChange={handleChange}
                      placeholder="enter name"
                    />
                  </div>
                  {touched.first_name && errors.first_name ? (
                    <div className="text-danger h6">{errors.first_name}</div>
                  ) : null}
                  <div className="form-group mb-3 row">
                    <label className="col-sm-4 h5 text-dark">LastName</label>
                    <input
                      className="field col-sm-8"
                      type="text"
                      name="last_name"
                      value={values.last_name}
                      onChange={handleChange}
                      placeholder="enter surname"
                    />
                  </div>
                  {errors.last_name && touched.last_name ? (
                    <div className="text-danger h6">{errors.last_name}</div>
                  ) : null}
                  <div className="form-group mb-3 row">
                    <label className="col-sm-4 h5 text-dark">Email</label>
                    <input
                      className="field col-sm-8"
                      type="text"
                      name="email"
                      value={values.email}
                      placeholder="enter email"
                      onChange={handleChange}
                    />
                  </div>
                  {errors.email && touched.email ? (
                    <div className="text-danger h6">{errors.email}</div>
                  ) : null}
                  <div className="form-group mb-3 row">
                    <label className="col-sm-4 h5 text-dark">City</label>
                    <input
                      className="field col-sm-8"
                      type="text"
                      name="city"
                      value={values.city}
                      placeholder="enter city"
                      onChange={handleChange}
                    />
                  </div>
                  {errors.city && touched.city ? (
                    <div className="text-danger h6">{errors.city}</div>
                  ) : null}
                  <div className="form-group mb-3 row">
                    <label className="col-sm-4 h5 text-dark">State</label>
                    <input
                      className="field col-sm-8"
                      type="text"
                      name="state"
                      value={values.state}
                      placeholder="enter state"
                      onChange={handleChange}
                    />
                  </div>
                  {errors.state && touched.state ? (
                    <div className="text-danger h6">{errors.state}</div>
                  ) : null}
                  <div className="form-group mb-3 row">
                    <label className="col-sm-4 h5 text-dark">Country</label>
                    <input
                      className="field col-sm-8"
                      type="text"
                      name="country"
                      value={values.country}
                      placeholder="enter country"
                      onChange={handleChange}
                    />
                  </div>
                  {errors.country && touched.country ? (
                    <div className="text-danger h6">{errors.country}</div>
                  ) : null}
                  <div className="form-group mb-3 row">
                    <label className="col-sm-4 h5 text-dark">Department:</label>
                    <select
                      className="field col-sm-8"
                      name="department"
                      value={values.department}
                      placeholder="enter department"
                      onChange={handleChange}
                    >
                      <option value="select">Select</option>
                      <option value="React">React</option>
                      <option value="Angular">Angular</option>
                      <option value=".Net">.Net</option>
                      <option value="Flutter">Flutter</option>
                    </select>
                  </div>
                  {errors.department && touched.department ? (
                    <div className="text-danger h6">{errors.department}</div>
                  ) : null}
                  <div className="form-group mb-3 row">
                    <label className="col-sm-4 h5 text-dark">Gender:</label>
                    <label className="input col-sm-4">
                      <input
                        type="radio"
                        name="gender"
                        checked={values.gender === 'Male'}
                        value="Male"
                        onChange={handleChange}
                      />
                      Male
                    </label>
                    <label className="input col-sm-4">
                      <input
                        type="radio"
                        name="gender"
                        checked={values.gender === 'Female'}
                        value="Female"
                        onChange={handleChange}
                      />
                      Female
                    </label>
                  </div>
                  {errors.gender && touched.gender ? (
                    <div className="text-danger h6">{errors.gender}</div>
                  ) : null}
                  <div className="text-center">
                    <button className="btn btn-primary" type="submit">
                      {edit ? 'UPDATE' : 'ADD'}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </Modal.Body>
        </Modal>
      </div>
      <div className="card-day15">
        {users.data?.map((user, i) => (
          <Card className="card border-gray mb-3" style={{ width: '22rem' }}>
            <ListGroup variant="flush" key={user._id}>
              <ListGroup.Item>
                <label className="col-sm-4 text-dark">ID:</label>
                {i + 1}
              </ListGroup.Item>
              <ListGroup.Item>
                <label className="col-sm-4">Firstname:</label>
                {user.first_name}
              </ListGroup.Item>
              <ListGroup.Item>
                <label className="col-sm-4">Lastname:</label>
                {user.last_name}
              </ListGroup.Item>
              <ListGroup.Item>
                <label className="col-sm-4">Email:</label>
                {user.email}
              </ListGroup.Item>
              <ListGroup.Item>
                <label className="col-sm-4">City:</label>
                {user.city}
              </ListGroup.Item>
              <ListGroup.Item>
                <label className="col-sm-4">State:</label>
                {user.state}
              </ListGroup.Item>
              <ListGroup.Item>
                <label className="col-sm-4">Country:</label>
                {user.country}
              </ListGroup.Item>
              <ListGroup.Item>
                <label className="col-sm-4">Department:</label>
                {user.department}
              </ListGroup.Item>
              <ListGroup.Item>
                <label className="col-sm-4">Gender:</label>
                {user.gender}
              </ListGroup.Item>
              <ListGroup.Item className="text-center">
                <Button className="button1" onClick={() => handleDeleteId(user._id)}>
                  Delete
                </Button>
                <Button className="button2" onClick={() => handleUpdate(user)}>
                  Update
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        ))}
      </div>
      <Modal show={showDelete} className="my-modal" onHide={deleteClose}>
        <Modal.Header closeButton className="mymodal-head">
          <Modal.Title className="mymodal-title">
            <h4>Confirm page</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="mymodal-body">Are you really want to delete this user?</Modal.Body>

        <Modal.Footer className="mymodal-footer m-auto">
          <button className="btn btn-primary" type="button" onClick={() => handleDelete(deleteId)}>
            Yes
          </button>
          <button className="btn btn-primary" type="button" onClick={deleteClose}>
            No
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Loader(Day15);
