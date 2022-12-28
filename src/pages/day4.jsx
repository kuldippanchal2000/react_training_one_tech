import React, { PureComponent } from 'react';
import './day4.scss';

class Day4 extends PureComponent {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.getUser();
    }, 1000 * 3);
  }

  // fetch the users api and display it.
  getUser() {
    fetch('https://reqres.in/api/users')
      .then((res) => res.json())
      .then((json) => {
        this.setState({ users: json.data });
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1 className="text-center text-decoration-underline text-primary">Student Information</h1>
        <table className="table_wrapper">
          <thead>
            <tr>
              <th className="text-dark">Id</th>
              <th className="text-dark">Email</th>
              <th className="text-dark">FirstName</th>
              <th className="text-dark">LastName</th>
              <th className="text-dark">Profile</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.length !== 0 ? (
              this.state.users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.email}</td>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>
                    <img src={user.avatar} alt="pic" />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="text-dark" colSpan={99}>
                  No Data Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Day4;
