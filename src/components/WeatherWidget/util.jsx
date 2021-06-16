import React from 'react';
import PropTypes from 'prop-types';

const withComponentLoading = (WrappedComponent) => {
  function WithWrap(props) {
    const { loading } = props;

    if (loading) return 'Loading';

    return (
      <WrappedComponent {...props} />
    );
  }

  WithWrap.propTypes = {
    loading: PropTypes.bool,
  };

  WithWrap.defaultProps = {
    loading: undefined,
  };

  return WithWrap;
};

export default withComponentLoading;
