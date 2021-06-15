import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import { get_successed, get_failed } from './actions';

const initialState = fromJS({
  records: {},
  errors: {},
});

const reducer = handleActions(
  {
    [get_successed]: (state, action) => {
      const records = fromJS(action.payload.data);
      return state.set('records', records);
    },
    [get_failed]: (state, action) => {
      const errors = fromJS(action.payload.data);
      return state.set('errors', errors);
    },
  },
  initialState,
);

export default reducer;
