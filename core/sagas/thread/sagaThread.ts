import { call, fork, put, take } from 'redux-saga/effects';
import { actionTypes } from 'core/interfaces';
import axios, { AxiosResponse } from 'axios';
import {
  failure,
  getDataEntryDetailSuccess,
  getDataIdEntryDetailSuccess,
  getDataIdUserSuccess,
} from 'core/actions';

// Utils
import GLOBAL_CONSTANTS from '../../utils/constants/globalConstants';

// ---------------- do
function* doLoadDataUserSaga(id: string) {
  try {
    debugger; // MongLV
    const url = `${GLOBAL_CONSTANTS.URL_API}/${GLOBAL_CONSTANTS.COMPANY_ID}/user_info?userIds=${id}&maxscore=0&minscore=0`;
    const { status, data }: AxiosResponse = yield call(axios.get, url, {
      headers: {
        'company-id': GLOBAL_CONSTANTS.COMPANY_ID,
        'x-header': JSON.stringify({ 'app-id': 1, systemType: 'vnr', isAuto: false }),
      },
    });
    if (status === 200) {
      yield put(getDataIdUserSuccess(data));
    }
  } catch (err) {
    yield put(failure(err));
  }
}

function* doLoadDataEntrySaga(id: string, nameAPI: string) {
  try {
    // TODO by MONGLV: Khi nào build thì đưa vào file env
    let url = `${GLOBAL_CONSTANTS.URL_API}/entries/${id}/detail`;
    if (nameAPI === 'vnr_old_entry') {
      url = `${GLOBAL_CONSTANTS.URL_API}/vnr_old_entry/${id}`;
    }
    const { status, data }: AxiosResponse = yield call(axios.get, url, {
      headers: {
        'company-id': GLOBAL_CONSTANTS.COMPANY_ID,
        'x-header': JSON.stringify({ 'app-id': 1, systemType: 'vnr', isAuto: false }),
      },
    });
    if (status === 200) {
      yield put(getDataEntryDetailSuccess(data));
      yield data &&
        data.Entry &&
        data.Entry[id].data &&
        data.Entry[id].data.userId &&
        fork(doLoadDataUserSaga, data.Entry[id].data.userId);
    }
  } catch (err) {
    yield put(failure(err));
  }
}

function* doLoadDataIdEntrySaga(id: string, nameAPI: string) {
  try {
    // TODO by MONGLV: Khi nào build thì đưa vào file env
    const url = `${GLOBAL_CONSTANTS.URL_API}/entries/${id}`;
    const { status, data }: AxiosResponse = yield call(axios.get, url, {
      headers: {
        'company-id': GLOBAL_CONSTANTS.COMPANY_ID,
        'x-header': JSON.stringify({ 'app-id': 1, systemType: 'vnr', isAuto: false }),
      },
    });
    if (status === 200) {
      yield put(getDataIdEntryDetailSuccess(data));
      yield fork(doLoadDataEntrySaga, id, nameAPI);
    }
  } catch (err) {
    yield put(failure(err));
  }
}

// ---------------- watch
function* watchGetDataDetail() {
  while (true) {
    const { id, nameAPI } = yield take(actionTypes.GET_ENTRY_DETAIL);
    yield fork(doLoadDataEntrySaga, id, nameAPI);
  }
}

function* watchGetUser() {
  while (true) {
    const { id } = yield take(actionTypes.GET_ID_USER);
    debugger; // MongLV
    yield fork(doLoadDataUserSaga, id);
  }
}

function* watchGetIdDataDetail() {
  while (true) {
    const { id, nameAPI } = yield take(actionTypes.GET_ID_DETAIL);
    yield fork(doLoadDataIdEntrySaga, id, nameAPI);
  }
}

export { watchGetDataDetail, watchGetIdDataDetail, watchGetUser };
