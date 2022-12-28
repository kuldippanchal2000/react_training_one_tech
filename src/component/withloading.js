/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import '../pages/day13/index';
import '../pages/day13/loader.scss';

function WithLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <div className="loader text-center">
        <Box>
          <CircularProgress color="secondary" />
          <h2>Wait till data fetched</h2>
        </Box>
      </div>
    );
  };
}
export default WithLoading;
