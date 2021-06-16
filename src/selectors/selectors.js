import { createSelector } from 'reselect';

export function getLocationSelector(state) {
  return state.getIn(['value', 'location']);
}

export function getWeatherSelector(state) {
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
