/* eslint-disable react/jsx-props-no-spreading */
import React, { PureComponent } from 'react';
import User from '../component/user';

class Day2 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'kuldip',
      lastName: 'panchal',
      email: 'k@gmail.com',
      number: '1234567891',
      city: 'Ahmedabad',
      state: 'Gujarat',
      country: 'India',
    };
  }

  // componentDidMount() method is type of lifecycle method called after the component is rendered.
  // setTimeout() set a timer which executes specified piece of code once the timer expires.

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        firstName: 'ketan',
        lastName: 'patel',
        city: 'Baroda',
      });
    }, 3000);
  }

  render() {
    return (
      <div>
        {/* Spread operator allow
         us to quickly copy all or
          part of an existing object
          into another array */}
        <User {...this.state} />
      </div>
    );
  }
}

export default Day2;
