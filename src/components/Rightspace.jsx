import React, { useState } from 'react';
import { spaceRight } from './Details';

const Rightspace = () => {
  const [rightSpace, setRightSpace] = useState(spaceRight);

  return (
    <>
      {rightSpace.map((item, index) => (
        <div key={index}>
          <hr />
          <div className="right-space-box">
            <img src={item.url} alt="Sidebar visual" />
            <div className="right-detail-box">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Rightspace;
