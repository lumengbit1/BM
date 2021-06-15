import { createSelector } from 'reselect';

function getLocationSelector(state) {
  return state.getIn(['value', 'location']);
}

function getWeatherSelector(state) {
  return state.getIn(['value', 'weather']);
}

export function makeLocationSelector() {
  return createSelector(
    [getLocationSelector],
    (records) => records,
  );
}

export function makeWeatherSelector() {
  return createSelector(
    [getWeatherSelector],
    (records) => records,
  );
}
