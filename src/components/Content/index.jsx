import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProducts } from '../../reducers/actions';
import { makeSelector } from '../../selectors/get';

const Content = (props) => (
  <div>
    <button type="button" onClick={() => props.get()}>
      get
    </button>

    {props.records && (
      <div>
        {props.records}
      </div>
    )}
  </div>
);

Content.propTypes = {
  get: PropTypes.func.isRequired,
  records: PropTypes.string,
};

Content.defaultProps = {
  records: undefined,
};

const makeMapStateToProps = () => {
  const getSelector = makeSelector();

  const mapStateToProps = (state) => ({
    records: getSelector(state),
  });
  return mapStateToProps;
};

const mapDispatchToProps = (dispatch) => ({
  get: (params) => dispatch(getProducts(params)),
});

export default connect(
  makeMapStateToProps,
  mapDispatchToProps,
)(Content);
