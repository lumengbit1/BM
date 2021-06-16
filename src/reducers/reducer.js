import { handleActions } from 'redux-actions';
import { fromJS, List, Map } from 'immutable';
import {
  get_location_successed,
  get_weather_successed,
  get_failed,
  clear_data,
  get_location,
  get_weather,
} from './actions';

const initialState = fromJS({
  location: [],
  weather: {},
  errors: {},
});

const reducer = handleActions(
  {
    [get_location]: (state) => state,
    [get_weather]: (state) => state,
    [get_location_successed]: (state, action) => {
      const records = fromJS(action.payload.data);
      return state.set('location', records);
    },
    [get_weather_successed]: (state, action) => {
      const records = fromJS(action.payload.data);
      return state.set('weather', records);
    },
    [get_failed]: (state, action) => {
      const errors = fromJS(action.payload.data);
      return state.set('errors', errors);
    },
    [clear_data]: (state) => state.set('location', List()).set('weather', Map()),
  },
  initialState,
);

export default reducer;
