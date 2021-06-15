import axios from 'axios';
import { createAction } from 'redux-actions';

export const get = createAction('GET_REQUEST');

export const get_successed = createAction('GET_RESOLVED');

export const get_failed = createAction('GET_REJECTED');

export const getProducts = () => (dispatch) => axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => dispatch(get_successed(response)))
  .catch((error) => dispatch(get_failed(error)));
