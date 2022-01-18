import { createSelector } from 'reselect';
import { AppState } from '@core/interfaces';
import { fromJS } from 'immutable';

const selectData = createSelector(
  (state: AppState) => state.error,
  (state: AppState) => state.lastUpdate,
  (state: AppState) => state.light,
  (state: AppState) => state.placeholderData,
  (state: AppState) => fromJS(state.Entry),
  (error, lastUpdate, light, placeholderData, Entry) => ({
    error,
    lastUpdate,
    light,
    placeholderData,
    Entry,
  }),
);

export { selectData };
