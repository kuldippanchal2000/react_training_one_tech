// Using bootstrap and External css for styling.

import React from 'react';
import { Button } from 'react-bootstrap';

import './day5.css';

class Day5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [
        {
          id: 1,
          Name: 'Kuldip',
          Age: 22,
          City: 'Ahmedabad',
          State: 'Gujarat',
        },
        {
          id: 2,
          Name: 'Jay',
          Age: 21,
          City: 'Baroda',
          State: 'Gujarat',
        },
        {
          id: 3,
          Name: 'Jaynish',
          Age: 19,
          City: 'Surat',
          State: 'Gujarat',
        },
      ],
      userInfo: [],
    };
  }

  // function for onclick event.
  getUser = (id) => {
    const name = this.state.user.filter((data) => data.id === id);
    this.setState({ userInfo: name });
  };

  render() {
    return (
      <div className="text-center bg-image">
        <h1 className="text-decoration-underline">Welcome to Our organization</h1>
        <div className="p-5">
          <h1 className="text-decoration-underline h1">User Details</h1>
          <div className="raw">
            <table className="table">
              <tbody>
                <tr className="h4">
                  <th>Name</th>
                  <th>UserDetails</th>
                </tr>
                {this.state.user.length !== 0
                  ? this.state.user.map((user) => (
                      <tr className="h4" key={user.id}>
                        <td className="h2">{user.Name}</td>
                        <td>
                          <Button
                            onClick={() => {
                              this.getUser(user.id);
                            }}
                          >
                            Show
                          </Button>
                        </td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
          </div>
        </div>
        <hr className="new4" />
        <div className="text-decoration-underline h3 ">
          {this.state.userInfo.map((userInfo) => (
            <div className="result" key={userInfo.id}>
              <table className="table2">
                <tbody>
                  <tr>
                    <td>Name:</td>
                    <th>{userInfo.Name}</th>
                  </tr>
                  <tr>
                    <td>Age:</td>
                    <th>{userInfo.Age}</th>
                  </tr>
                  <tr>
                    <td>City:</td>
                    <th>{userInfo.City}</th>
                  </tr>
                  <tr>
                    <td>State:</td>
                    <th>{userInfo.State}</th>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Day5;
