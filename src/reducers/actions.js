import axios from 'axios';
import { createAction } from 'redux-actions';
import queryString from 'query-string';
import _ from 'lodash';
import settings from '../settings';

export const get_successed = createAction('GET_RESOLVED');

export const get_failed = createAction('GET_REJECTED');

export const getLocation = (location, params) => (dispatch) => axios.get(`${settings.LOCATIONIQ_BASE_API_DOMAIN}?${queryString.stringify(_.assign({ q: location, key: settings.LOCATIONIQ_KEY, format: 'json' }, params))}`)
  .then((response) => dispatch(get_successed(response)))
  .catch((error) => dispatch(get_failed(error)));

export const getWeatherReport = (latitude, longitude, params) => (dispatch) => axios.get(`${settings.OPEN_WEATHER_MAP_BASE_API_DOMAIN}?${queryString.stringify(_.assign({ lat: latitude, lon: longitude, appid: settings.OPEN_WEATHER_MAP_KEY, units: 'metric', exclude: 'current,minutely,hourly' }, params))}`)
  .then((response) => dispatch(get_successed(response)))
  .catch((error) => dispatch(get_failed(error)));
