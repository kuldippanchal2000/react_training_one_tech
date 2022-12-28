/* eslint-disable import/no-cycle */
import React, { useEffect, useState } from 'react';
import List from './list';
import WithLoading from '../../component/withloading';
// import './day13.scss';

const ListWithLoading = WithLoading(List);

function Day13() {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState({});

  useEffect(() => {
    setTimeout(() => {
      fetch('https://reqres.in/api/users?page=1')
        .then((json) => json.json())
        .then((item) => {
          setLoading(false);
          setDetail(item.data);
        })
        .catch(() => {
          setLoading(false);
          setDetail(null);
        });
    }, 3000);
  });

  return (
    <div className="day13 container">
      <ListWithLoading isLoading={loading} data={detail} />
    </div>
  );
}
export default Day13;
