/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-array-index-key */
/* eslint-disable operator-linebreak */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getEmployee,
  addEmployee,
  editEmployee,
  deleteEmployee,
} from '../../redux/actions/actions';
import './index.scss';

class Day14 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      username: '',
      department: '',
    };
  }

  componentDidMount() {
    this.props.getEmployee();
  }

  handleNameChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  handleDepartmentChange = (e) => {
    this.setState({
      department: e.target.value,
    });
  };

  editDetails = (data) => {
    this.setState({
      id: data.id,
      username: data.username,
      department: data.department,
    });
  };

  deleteEmployee = (id) => {
    this.clearData();
    if (window.confirm('Are you sure?')) {
      this.props.deleteEmployee(id);
    }
  };

  submitData = () => {
    if (this.state.username && this.state.department && !this.state.id) {
      const newEmployee = {
        id: Math.random(),
        username: this.state.username,
        department: this.state.department,
      };

      this.props.addEmployee(newEmployee);
    } else if (this.state.username && this.state.department && this.state.id) {
      const updatedDetails = {
        id: this.state.id,
        username: this.state.username,
        department: this.state.department,
      };

      this.props.editEmployee(updatedDetails);
    } else {
      alert('Enter Employee Details.');
    }
    this.clearData();
  };

  clearData = () => {
    this.setState({
      id: 0,
      username: '',
      department: '',
    });
  };

  render() {
    return (
      <div className="day14-container bg-light">
        <h1 className="text-center text-decoration-underline">User Form</h1>
        <form className="day14-body">
          <h3 className="text-center text-primary mb-4">Sign-up</h3>
          <div className="form-group mb-1 mb-1 row">
            <label className="col-sm-6 h5 text-dark">User Name:</label>
            <input
              className="field col-sm-6"
              onChange={this.handleNameChange}
              value={this.state.username}
              type="text"
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group mb-1 row">
            <label className="col-sm-6 h5 text-dark">Department:</label>
            <input
              className="field col-sm-6"
              onChange={this.handleDepartmentChange}
              value={this.state.department}
              type="text"
              placeholder="Enter Department"
            />
          </div>
          <div className="day14-button">
            <br />
            {this.state.id ? (
              <button className="btn btn-primary" type="button" onClick={this.submitData}>
                UPDATE
              </button>
            ) : (
              <button className="btn btn-primary" type="button" onClick={this.submitData}>
                ADD
              </button>
            )}
            <button className="btn btn-primary m-1" type="button" onClick={this.clearData}>
              CLEAR
            </button>
          </div>
        </form>
        <table className="day14-table mt-5">
          <thead>
            <tr>
              <th className=" text-black">ID</th>
              <th className=" text-black">Name</th>
              <th className=" text-black">Department</th>
              <th className=" text-black">Edit</th>
              <th className=" text-black">Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.props.employees &&
              this.props.employees.map((data, i) => (
                <tr key={i}>
                  <td className=" text-black">{i + 1}</td>
                  <td className=" text-black">{data.username}</td>
                  <td className=" text-black">{data.department}</td>
                  <td>
                    <button type="button" onClick={() => this.editDetails(data)}>
                      EDIT
                    </button>
                  </td>
                  <td>
                    <button type="button" onClick={() => this.deleteEmployee(data.id)}>
                      DEL
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

Day14.propTypes = {
  employees: PropTypes.instanceOf(Array).isRequired,
  getEmployee: PropTypes.func.isRequired,
  addEmployee: PropTypes.func.isRequired,
  editEmployee: PropTypes.func.isRequired,
  deleteEmployee: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  employees: state.reducer.employees,
});

export default connect(mapStateToProps, {
  getEmployee,
  addEmployee,
  editEmployee,
  deleteEmployee,
})(Day14);
