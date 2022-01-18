import { call, put, takeLatest } from 'redux-saga/effects';
import { actionTypes } from 'core/interfaces';
import axios, { AxiosResponse } from 'axios';
import { failure, getDataEntryDetailSuccess } from 'core/actions';

// ---------------- do
function* doLoadDataSaga() {
  try {
    debugger; // MongLV
    const { status, data }: AxiosResponse = yield call(
      axios.get,
      // 'https://service.vnreview.vn/entries/281474976793931',
      'https://vnr-thread.vercel.app/api/thread/detail',
      // 'http://localhost:2000/api/thread/detail',
    );

    console.log('status', status); // MongLV log fix bug

    console.log('data', data); // MongLV log fix bug

    if (status === 200) {
      yield put(getDataEntryDetailSuccess(data));
    }
  } catch (err) {
    yield put(failure(err));
  }
}

// ---------------- watch
function* watchGetDataDetail() {
  yield takeLatest(actionTypes.GET_ENTRY_DETAIL, doLoadDataSaga);
}

export { watchGetDataDetail };
