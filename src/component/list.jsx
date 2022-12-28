import React from 'react';
import { useSearchParams } from 'react-router-dom';

function List() {
  const [searchParams] = useSearchParams();

  return (
    <div>
      <h1 className="text-dark text-decoration-underline">Yours Data!</h1>
      {[...searchParams].map((item) => (
        <div key={item}>
          <div className="text-info h3">
            {item[0]} : {item[1]}
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
