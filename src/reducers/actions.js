import axios from 'axios';
import { createAction } from 'redux-actions';
import queryString from 'query-string';
import _ from 'lodash';
import settings from '../settings';

export const get_location_successed = createAction('GET_LOCATION_RESOLVED');

export const get_weather_successed = createAction('GET_WEATHER_RESOLVED');

export const get_failed = createAction('GET_REJECTED');

export const getLocationAction = (location, params) => (dispatch) => axios.get(`${settings.LOCATIONIQ_BASE_API_DOMAIN}?${queryString.stringify(_.assign({ q: location, key: settings.LOCATIONIQ_KEY, format: 'json' }, params))}`)
  .then((response) => dispatch(get_location_successed(response)))
  .catch((error) => dispatch(get_failed(error)));

export const getWeatherAction = (latitude, longitude, params) => (dispatch) => axios.get(`${settings.OPEN_WEATHER_MAP_BASE_API_DOMAIN}?${queryString.stringify(_.assign({ lat: latitude, lon: longitude, appid: settings.OPEN_WEATHER_MAP_KEY, units: 'metric', exclude: 'current,minutely,hourly' }, params))}`)
  .then((response) => dispatch(get_weather_successed(response)))
  .catch((error) => dispatch(get_failed(error)));
