import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './day10.scss';

function Day10() {
  return (
    <div className="parent">
      <h1>Hello, Welcome to the page!</h1>
      <ul>
        <li>
          <Link to="search">Data</Link>{' '}
        </li>
        <li>
          <Link to="list">List</Link>
        </li>
      </ul>
      <Outlet />
      {/* We used an <Outlet> element as a placeholder.
          An <Outlet>, in this case, is how the Courses
          component renders its child routes.
          So the <Outlet> will render either a first component or second component
          depending on the current location. */}
    </div>
  );
}
export default Day10;
