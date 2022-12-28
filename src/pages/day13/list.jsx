import React from 'react';
import PropTypes from 'prop-types';
import './list.scss';

function List(props) {
  const { data } = props;

  if (!data) return null;
  if (!data.length) return <p>No data, sorry</p>;
  return (
    <div className="list container mb-5 text-center">
      <h2 className="text-decoration-underline">Student Information</h2>
      <table className="table_container">
        <tbody>
          <tr className="h4">
            <th className="text-dark">Id</th>
            <th className="text-dark">Email</th>
            <th className="text-dark">FirstName</th>
            <th className="text-dark">LastName</th>
            <th className="text-dark">Profile</th>
          </tr>
          {data.length !== 0 ? (
            data.map((user) => (
              <tr key={user.id}>
                <td className="text-dark h4">{user.id}</td>
                <td className="text-success text-decoration-underline h5">{user.email}</td>
                <td className="h5">{user.first_name}</td>
                <td className="h5">{user.last_name}</td>
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

List.propTypes = {
  data: PropTypes.string,
};

List.defaultProps = {
  data: '',
};
export default List;
