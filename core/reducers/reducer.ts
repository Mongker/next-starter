import { HYDRATE } from 'next-redux-wrapper';
import { Action, actionTypes, AppState } from '../interfaces';
// import { dataFake2 } from 'core/dataFake/dataFake';

export const exampleInitialState: AppState = {
  count: 0,
  error: null,
  lastUpdate: 0,
  light: false,
  placeholderData: null,
  Entry: null,
  Comment: null,
  Keyword: null,
  HasKeyword: null,
  HasTag: null,
  ReactionTypes: null,
  HasPermissions: null,
  HasCommentUser: null,
  HasSeen: null,
  HasHiddenKeyword: null,
  HiddenKeyword: null,
  ReactionAll: null,
  HasEntry: null,
  ReactionUser: null,
  User: null,
  Tag: null,
  HasComment: null,
  HasRelatedEntry: null,
};

const reducer = (
  state = exampleInitialState,
  action: Action | { type: typeof HYDRATE; payload: AppState },
): AppState => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error },
      };

    case actionTypes.INCREMENT:
      return {
        ...state,
        ...{ count: state.count + 1 },
      };

    case actionTypes.DECREMENT:
      return {
        ...state,
        ...{ count: state.count - 1 },
      };

    case actionTypes.RESET:
      return {
        ...state,
        ...{ count: exampleInitialState.count },
      };

    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ placeholderData: action.data },
      };

    case actionTypes.TICK_CLOCK:
      return {
        ...state,
        ...{ lastUpdate: action.ts, light: !!action.light },
      };
    case actionTypes.GET_ID_DETAIL_SUCCESS: {
      return {
        ...state,
        ...action.data,
      };
    }
    case actionTypes.GET_ENTRY_DETAIL_SUCCESS:
      state.Entry = { ...action.data.Entry };
      return {
        ...state,
      };
    case actionTypes.GET_ID_USER_SUCCESS:
      state.User = { ...state.User, ...action.data.User };
      return {
        ...state,
      };
    case actionTypes.GET_RELATIVE_ENTRY_SUCCESS:
      state.Entry = { ...state.Entry, ...action.data.Entry };
      state.HasRelatedEntry = { ...state.HasRelatedEntry, ...action.data.HasRelatedEntry };
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
