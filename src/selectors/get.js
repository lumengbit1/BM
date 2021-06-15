import { createSelector } from 'reselect';

function getSelector(state) {
  return state.getIn(['value', 'records']);
}

export function makeSelector() {
  return createSelector(
    [getSelector],
    (records) => records.get('title'),
  );
}
