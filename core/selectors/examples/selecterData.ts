import { createSelector } from 'reselect';
import { AppState } from '@core/interfaces';

const selectData = createSelector(
  (state: AppState) => state.error,
  (state: AppState) => state.lastUpdate,
  (state: AppState) => state.light,
  (state: AppState) => state.placeholderData,
  (error, lastUpdate, light, placeholderData) => ({ error, lastUpdate, light, placeholderData }),
);

export { selectData };
