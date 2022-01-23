import {
  User,
  actionTypes,
  IGetEntryDetail,
  IGetEntryIDDetail,
  IGetEntryIDDetailSuccess,
  IGetIdUserSuccess,
  IGetIdUser,
} from '../interfaces';
import * as actionIs from '../interfaces/actions.interfaces';

export function failure(error: Error): actionIs.Failure {
  return {
    type: actionTypes.FAILURE,
    error,
  };
}

export function increment(): actionIs.Increment {
  return { type: actionTypes.INCREMENT };
}

export function decrement(): actionIs.Decrement {
  return { type: actionTypes.DECREMENT };
}

export function reset(): actionIs.Reset {
  return { type: actionTypes.RESET };
}

export function loadData(): actionIs.LoadData {
  return { type: actionTypes.LOAD_DATA };
}

export function loadDataSuccess(data: User[]): actionIs.LoadDataSuccess {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    data,
  };
}

export function startClock(): actionIs.StartClock {
  return { type: actionTypes.START_CLOCK };
}

export function tickClock(isServer: boolean): actionIs.TickClock {
  return {
    type: actionTypes.TICK_CLOCK,
    light: !isServer,
    ts: Date.now(),
  };
}

export function getDataEntryDetail(id: string, nameAPI = 'entries'): IGetEntryDetail {
  return { type: actionTypes.GET_ENTRY_DETAIL, id: id, nameAPI };
}

export function getDataEntryDetailSuccess(data: any): actionIs.IGetEntryDetailSuccess {
  return { type: actionTypes.GET_ENTRY_DETAIL_SUCCESS, data };
}

export function getDataIdEntryDetail(id: string, nameAPI = 'entries'): IGetEntryIDDetail {
  return { type: actionTypes.GET_ID_DETAIL, id: id, nameAPI };
}

export function getDataIdEntryDetailSuccess(data: any): actionIs.IGetEntryIDDetailSuccess {
  return { type: actionTypes.GET_ID_DETAIL_SUCCESS, data };
}

export function getDataIdUser(id: string): actionIs.IGetIdUser {
  return { type: actionTypes.GET_ID_USER, id };
}
export function getDataIdUserSuccess(data: any): actionIs.IGetIdUserSuccess {
  return { type: actionTypes.GET_ID_USER_SUCCESS, data };
}

export function getRelativeEntries(id: string): actionIs.IGetRelativeEntries {
  return { type: actionTypes.GET_RELATIVE_ENTRY, id };
}
export function getRelativeEntriesSuccess(data: any): actionIs.IGetRelativeEntriesSuccess {
  debugger; // Todo by MongLV
  return { type: actionTypes.GET_RELATIVE_ENTRY_SUCCESS, data };
}
