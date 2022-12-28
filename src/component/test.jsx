import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Test extends PureComponent {
  render() {
    const { changeHead } = this.props;
    return (
      <button type="button" onClick={changeHead}>
        submit
      </button>
    );
  }
}

Test.propTypes = {
  changeHead: PropTypes.string,
};

Test.defaultProps = {
  changeHead: '',
};
export default Test;
