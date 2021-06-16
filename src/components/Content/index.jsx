import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { fromJS, Map } from 'immutable';

import Select from 'react-select';
import { getLocationAction, getWeatherAction } from '../../reducers/actions';
import { makeLocationSelector, makeWeatherSelector } from '../../selectors/get';
import WeatherWidget from '../WeatherWidget';
import { Root, SubmitBtn } from './style';

const Content = (props) => {
  const { getLocation, locationRecords, getWeatherReport, weatherRecords } = props;
  const [inputValue, setInputValue] = React.useState();

  const isActive = inputValue && inputValue.get('value').get('lat') && inputValue.get('value').get('lon');
  const latitude = inputValue && inputValue.get('value').get('lat');
  const longitude = inputValue && inputValue.get('value').get('lon');

  const options = locationRecords && locationRecords.size > 0
    ? locationRecords.map((record) => _.assign({}, { label: record.get('display_name'), value: { lat: record.get('lat'), lon: record.get('lon') } })).toJS()
    : [];

  const handleInputChange = _.debounce((value) => {
    if (value) {
      getLocation(value);
    }
  }, 500);

  const handleOnChange = (value) => {
    setInputValue(fromJS(value));
  };

  const handleOnSubmit = () => {
    getWeatherReport(latitude, longitude);
  };

  return (
    <Root>
      <Select
        value={Map(inputValue).toJS()}
        onInputChange={handleInputChange}
        onChange={handleOnChange}
        options={options}
      />
      <SubmitBtn
        type="button"
        disabled={!isActive}
        onClick={handleOnSubmit}
      >
        Submit
      </SubmitBtn>
      <WeatherWidget
        weatherRecords={weatherRecords}
      />
    </Root>
  );
};

Content.propTypes = {
  getLocation: PropTypes.func.isRequired,
  getWeatherReport: PropTypes.func.isRequired,
  locationRecords: ImmutablePropTypes.list,
  weatherRecords: ImmutablePropTypes.map,
};

Content.defaultProps = {
  locationRecords: undefined,
  weatherRecords: undefined,
};

const makeMapStateToProps = () => {
  const getLocationSelector = makeLocationSelector();
  const getWeatherSelector = makeWeatherSelector();

  const mapStateToProps = (state) => ({
    locationRecords: getLocationSelector(state),
    weatherRecords: getWeatherSelector(state),
  });
  return mapStateToProps;
};

const mapDispatchToProps = (dispatch) => ({
  getLocation: (location) => dispatch(getLocationAction(location)),
  getWeatherReport: (lat, lon) => dispatch(getWeatherAction(lat, lon)),
});

export default connect(
  makeMapStateToProps,
  mapDispatchToProps,
)(Content);
