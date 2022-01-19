import { User, actionTypes, IGetEntryDetail } from '../interfaces';
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
