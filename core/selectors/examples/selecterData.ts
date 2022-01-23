import { createSelector } from 'reselect';
import { AppState } from 'core/interfaces';
import { fromJS } from 'immutable';

const selectData = createSelector(
  (state: AppState) => state.error,
  (state: AppState) => state.lastUpdate,
  (state: AppState) => state.light,
  (state: AppState) => state.placeholderData,
  (state: AppState) => fromJS(state.Entry),
  (state: AppState) => fromJS(state.Comment),
  (state: AppState) => fromJS(state.User),
  (state: AppState) => fromJS(state.HasRelatedEntry),
  (error, lastUpdate, light, placeholderData, Entry, Comment, User, HasRelatedEntry) => ({
    error,
    lastUpdate,
    light,
    placeholderData,
    Entry,
    Comment,
    User,
    HasRelatedEntry,
  }),
);

export { selectData };
