import 'moment-timezone';
import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {
  Root,
  Cell,
} from './style';

const WeatherWidget = (props) => {
  const { weatherRecords, weatherValue, index } = props;
  console.log(weatherValue);
  return (
    <Root>
      <Cell>
        <div>
          Date
        </div>
        <div>
          {moment().add(index + 1, 'days').tz(weatherRecords.get('timezone')).format('dddd, Do MMM YYYY')}
        </div>
      </Cell>
      <Cell>
        <div>
          Maximum Temperature
        </div>
        <div>
          {weatherValue.get('temp').get('max')}
        </div>
      </Cell>
      <Cell>
        <div>
          Minimum Temperature
        </div>
        <div>
          {weatherValue.get('temp').get('min')}
        </div>
      </Cell>
      <Cell>
        <div>
          Weather Conditions
        </div>
        <div>
          {weatherValue.get('weather') && weatherValue.get('weather').map((val) => val.get('description'))}
        </div>
      </Cell>
    </Root>
  );
};

WeatherWidget.propTypes = {
  weatherRecords: ImmutablePropTypes.map.isRequired,
  weatherValue: ImmutablePropTypes.map.isRequired,
  index: PropTypes.number.isRequired,
};

export default WeatherWidget;
