/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Test from '../component/test';

class Day3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      city: '',
      new_item: 'Welcome to Our Organization.',
    };
  }

  componentDidMount() {
    // eslint-disable-next-line no-console
    console.log('Did Mount');
    setTimeout(() => {
      this.setState({
        firstName: 'enter your name',
        lastName: 'enter your surname',
        city: 'enter city',
        new_item: 'Welcome User',
      });
    }, 3000);
  }

  // shouldComponentUpdate decides whether component requires rerendering or not.
  shouldComponentUpdate(nextProps, nextState) {
    // eslint-disable-next-line no-console
    console.log('shouldComponentUpdate()');
    return true;
  }

  // componentDidUpdate allows us to execute the React code when the component is updated.
  componentDidUpdate(prevState) {
    if (prevState.firstName !== this.state.firstName) {
      // eslint-disable-next-line no-console
      console.log('ComponentDidUpdate');
    }
  }

  /* componentWillUnmount allows us to
    execute the React code when the component
    gets destroyed from the DOM. */

  componentWillUnmount() {
    // eslint-disable-next-line no-alert
    alert('unmount');
  }

  // function for onclick event.
  changeHead = () => {
    this.setState({
      firstName: 'kuldip',
      lastName: 'panchal',
      city: 'Ahmedabad',
    });
  };

  render() {
    return (
      <>
        <h1 className="text-center text-decoration-underline text-primary">
          {this.state.new_item}
        </h1>
        <h2>Your Detail</h2>
        <ul>
          <li>
            <b>
              FirstName:
              {this.state.firstName}
            </b>
          </li>
          <li>
            <b>
              LastName:
              {this.state.lastName}
            </b>
          </li>
          <li>
            <b>
              City:
              {this.state.city}
            </b>
          </li>
        </ul>
        <Test changeHead={this.changeHead} firstName={this.state.firstName} />
      </>
    );
  }
}
export default Day3;
