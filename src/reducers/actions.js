import axios from 'axios';
import { createAction } from 'redux-actions';
import queryString from 'query-string';
import _ from 'lodash';
import settings from '../settings';

export const get = createAction('GET_REQUEST');

export const get_successed = createAction('GET_RESOLVED');

export const get_failed = createAction('GET_REJECTED');

export const getProducts = (params) => (dispatch) => axios.get(`${settings.LOCATIONIQ_BASE_API_DOMAIN}?${queryString.stringify(_.assign({ q: params }, { key: settings.LOCATIONIQ_KEY }, params, { format: 'json' }))}`)
  .then((response) => dispatch(get_successed(response)))
  .catch((error) => dispatch(get_failed(error)));
