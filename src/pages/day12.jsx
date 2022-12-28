/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-shadow */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

import './day12.scss';

const form = Yup.object().shape({
  RouteName: Yup.string().required('Name Required'),
});
const Users = [
  {
    id: 1,
    name: 'kuldip',
    email: 'KPanchal@gamil.com',
    selected: false,
  },
  {
    id: 2,
    name: 'jay',
    email: 'JPanchal@gamil.com',
    selected: false,
  },
  {
    id: 3,
    name: 'vansh',
    email: 'VPanchal@gamil.com',
    selected: false,
  },
];

function Day12() {
  const navigate = useNavigate();
  const [Data, setData] = useState(Users);

  const [Checked, setChecked] = useState(false);
  const [SelectedData, setSelectedData] = useState([]);

  const handleChange = (e) => {
    const tempData = Data;
    tempData.map((user) => (user.selected = e.target.checked));
    setChecked(e.target.checked);
    setSelectedData(Data.filter((e) => e.selected));
    setData(tempData);
  };

  const onItemChange = (e, item) => {
    const tempData = Data;
    tempData.map((user) => {
      if (user.id === item.id) {
        user.selected = e.target.checked;
      }
      return user;
    });
    const totalItems = Data.length;
    const totalCheckedItems = tempData.filter((e) => e.selected).length;
    setChecked(totalItems === totalCheckedItems);
    setData(tempData);
    setSelectedData(Data.filter((e) => e.selected));
  };
  return (
    <div className="day12-container">
      <h2 className="text-decoration-underline">Welcome User</h2>
      <Formik
        initialValues={{
          RouteName: '',
        }}
        validationSchema={form}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          navigate(`/${values.RouteName}`);
        }}
      >
        {({ errors, touched }) => (
          <Form className="text-form">
            <label> RouteName:</label>
            <Field name="RouteName" placeholder="Enter your Name" />
            {errors.RouteName && touched.RouteName ? (
              <div className="text-danger h6">{errors.RouteName}</div>
            ) : null}
            <div>
              <button className="day12-btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <div className="day12-table">
        <table className="table-div">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={Checked}
                  onChange={handleChange}
                />
              </th>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((user) => (
              <tr key={user.id}>
                <th>
                  <input
                    type="checkbox"
                    checked={user.selected}
                    className="form-check-input"
                    onChange={(e) => onItemChange(e, user)}
                  />
                </th>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="day12-data">
          <h4>Selected Row Data:</h4>
          <div className="main-data">{JSON.stringify(SelectedData)}</div>
        </div>
      </div>
    </div>
  );
}

export default Day12;
