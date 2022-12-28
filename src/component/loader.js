/* eslint-disable react/jsx-filename-extension */
/* eslint-disable implicit-arrow-linebreak */
import React, { Component } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
// import Box from '@mui/material/Box';

const Loader = (ComposedComponent) =>
  class extends Component {
    constructor() {
      super();
      this.state = {
        loading: true,
      };
    }

    componentDidMount() {
      setTimeout(() => {
        this.setState({ loading: false });
      }, 1000 * 2);
    }

    render() {
      return this.state.loading ? (
        <div className="text-center">
          <CircularProgress color="secondary" />
          <h2>Wait till data fetched</h2>
        </div>
      ) : (
        <ComposedComponent />
      );
    }
  };
export default Loader;
