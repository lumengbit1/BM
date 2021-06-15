import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import Select from 'react-select';
import _ from 'lodash';
import { getLocation } from '../../reducers/actions';
import { makeSelector } from '../../selectors/get';

const Content = (props) => {
  const { get, records } = props;
  const [inputValue, setInputValue] = React.useState();

  const options = records && records.size > 0
    ? records.map((record) => _.assign({}, { label: record.get('display_name'), value: { lat: record.get('lat'), lon: record.get('lon') } })).toJS()
    : [];

  const handleInputChange = _.debounce((value) => {
    getLocation(value);
  }, 500);

  const handleChange = (value) => {
    setInputValue(fromJS(value));
  };
  console.log(inputValue);
  return (
    <div>
      <Select
        value={inputValue}
        onInputChange={handleInputChange}
        onChange={handleChange}
        options={options}
      />
      <button type="button" onClick={() => get('57 bliss MediaStreamTrack')}>
        get
      </button>
    </div>
  );
};

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
  getLocation: (location) => dispatch(getLocation(location)),
  getWeatherReport: (lat, lon) => dispatch(getLocation(lat, lon)),
});

export default connect(
  makeMapStateToProps,
  mapDispatchToProps,
)(Content);
