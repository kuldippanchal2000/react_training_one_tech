import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class User extends PureComponent {
  render() {
    // eslint-disable-next-line object-curly-newline
    const { firstName, lastName, email, number, city, state, country } = this.props;
    return (
      <div>
        <h1 className="text-center text-primary text-decoration-underline">Employee Details</h1>
        <ul>
          <li>
            <b>
              FirstName:
              {firstName}
            </b>
          </li>
          <li>
            <b>
              LastName:
              {lastName}
            </b>
          </li>
          <li>
            <b>
              Email-Id:
              {email}
            </b>
          </li>
          <li>
            <b>
              Number:
              {number}
            </b>
          </li>
          <li>
            <b>
              City:
              {city}
            </b>
          </li>
          <li>
            <b>
              State:
              {state}
            </b>
          </li>
          <li>
            <b>
              Country:
              {country}
            </b>
          </li>
        </ul>
      </div>
    );
  }
}

User.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  number: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  country: PropTypes.string,
};

User.defaultProps = {
  firstName: '',
  lastName: '',
  email: '',
  number: '',
  city: '',
  state: '',
  country: '',
};

export default User;
