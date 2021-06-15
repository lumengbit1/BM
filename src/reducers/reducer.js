import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import { get_location_successed, get_weather_successed, get_failed } from './actions';

const initialState = fromJS({
  location: {},
  weather: {},
  errors: {},
});

const reducer = handleActions(
  {
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
  },
  initialState,
);

export default reducer;
