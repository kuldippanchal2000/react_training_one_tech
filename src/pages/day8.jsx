import React, { useState } from 'react';
import './day8.css';
import { Button } from 'react-bootstrap';

function Day8() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState('');
  const counterReset = () => {
    if (error.trim() !== '') {
      setError('');
    }
    setCount(0);
  };
  // counterIncrement function used for increase the count when click on Increment button.
  const counterIncrement = () => {
    if (error.trim() !== '') {
      setError('');
    }
    setCount((prevCount) => prevCount + 1);
  };
  // counterDecrement function used for decrease the count when click on Decrement button.
  const counterDecrement = () => {
    if (count === 0) {
      setError('You cannot count negative value!');
      return;
    }
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <div className="background">
      <div className="container text-center p-5">
        <div className="p-5">
          <p className="para">Welcome To Count</p>
          <div>
            <div className="p-3">
              <Button
                variant="success"
                type="Button"
                className="increment"
                onClick={counterIncrement}
              >
                Increment
              </Button>
              <Button
                variant="danger"
                type="Button"
                className="decrement"
                onClick={counterDecrement}
              >
                Decrement
              </Button>
            </div>
            <div className="col">
              <Button variant="primary" type="Button" onClick={counterReset}>
                Reset count
              </Button>
            </div>
          </div>
          {error.length > 0 && <div className="animated error text-danger h2">{error}</div>}
        </div>
        <h1 className="text-success">Your Count is : {count}</h1>
      </div>
    </div>
  );
}
export default Day8;
