import React, { useEffect, useState } from 'react';
// Using MUI its provides a simple, customizable, and accessible library of React components.
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import TabletIcon from '@mui/icons-material/Tablet';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import './day7.css';

function Day7() {
  // using useState instead of setState.
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  // update function for updating the value of width and height when it change.
  const update = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  // useEffect work similar as lifecycle.
  // addEventListener() method attaches an event handler to a document.
  useEffect(() => {
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  });

  // Using multiple ternary operator for this.
  return (
    <div className="bg">
      <div className="heading">
        Current width is : {width} <br />
        Current height is : {height}
      </div>
      <div className="custom-row">
        <div className="col">
          Current Window is :
          {width > 820 ? (
            <div>
              <DesktopWindowsIcon sx={{ fontSize: 40 }} /> (desktop)
            </div>
          ) : width < 600 ? (
            <div>
              <PhoneAndroidIcon sx={{ fontSize: 40 }} /> (Phone:)
            </div>
          ) : (
            <div>
              <TabletIcon sx={{ fontSize: 40 }} /> (Tablet: )
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Day7;
