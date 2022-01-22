import { User } from './index';

export enum actionTypes {
  FAILURE = 'FAILURE',
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  RESET = 'RESET',
  LOAD_DATA = 'LOAD_DATA',
  LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS',
  START_CLOCK = 'START_CLOCK',
  TICK_CLOCK = 'TICK_CLOCK',

  // thread
  GET_ID_USER = 'GET_ID_USER',
  GET_ID_USER_SUCCESS = 'GET_ID_USER_SUCCESS',
  GET_ID_DETAIL = 'GET_ID_ENTRY_DETAIL',
  GET_ID_DETAIL_SUCCESS = 'GET_ID_ENTRY_DETAIL_SUCCESS',
  GET_ENTRY_DETAIL = 'GET_ENTRY_DETAIL',
  GET_ENTRY_DETAIL_SUCCESS = 'GET_ENTRY_DETAIL_SUCCESS',
}

export interface Failure {
  type: actionTypes.FAILURE;
  error: Error;
}

export interface Increment {
  type: actionTypes.INCREMENT;
}

export interface Decrement {
  type: actionTypes.DECREMENT;
}

export interface Reset {
  type: actionTypes.RESET;
}

export interface LoadData {
  type: actionTypes.LOAD_DATA;
}

export interface LoadDataSuccess {
  type: actionTypes.LOAD_DATA_SUCCESS;
  data: User[];
}

export interface StartClock {
  type: actionTypes.START_CLOCK;
}

export interface TickClock {
  type: actionTypes.TICK_CLOCK;
  light: boolean;
  ts: number;
}

export interface IGetEntryDetail {
  type: actionTypes.GET_ENTRY_DETAIL;
  id: string;
  nameAPI: string;
}

export interface IGetEntryDetailSuccess {
  type: actionTypes.GET_ENTRY_DETAIL_SUCCESS;
  data: any;
}

export interface IGetEntryIDDetail {
  type: actionTypes.GET_ID_DETAIL;
  id: string;
  nameAPI: string;
}

export interface IGetEntryIDDetailSuccess {
  type: actionTypes.GET_ID_DETAIL_SUCCESS;
  data: any;
}

export interface IGetIdUser {
  type: actionTypes.GET_ID_USER;
  id: string;
}

export interface IGetIdUserSuccess {
  type: actionTypes.GET_ID_USER_SUCCESS;
  data: any;
}

export type Action =
  | Failure
  | Increment
  | Decrement
  | Reset
  | LoadData
  | LoadDataSuccess
  | StartClock
  | TickClock
  | IGetEntryIDDetail
  | IGetEntryIDDetailSuccess
  | IGetIdUser
  | IGetIdUserSuccess
  | IGetEntryDetail
  | IGetEntryDetailSuccess;
