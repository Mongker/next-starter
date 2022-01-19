import { call, fork, put, take } from 'redux-saga/effects';
import { actionTypes } from 'core/interfaces';
import axios, { AxiosResponse } from 'axios';
import { failure, getDataEntryDetailSuccess } from 'core/actions';
// ---------------- do
function* doLoadDataSaga(id: string, nameAPI: string) {
  try {
    let url = `https://service.vnreview.vn/entries/${id}/detail`;
    if (nameAPI === 'vnr_old_entry') {
      url = `https://service.vnreview.vn/vnr_old_entry/${id}`;
    }
    const { status, data }: AxiosResponse = yield call(axios.get, url, {
      headers: {
        'company-id': '563705867864535',
        'x-header': JSON.stringify({ 'app-id': 1, systemType: 'vnr', isAuto: false }),
      },
    });
    if (status === 200) {
      yield put(getDataEntryDetailSuccess(data));
    }
    console.log('123', status); // MongLV log fix bug
  } catch (err) {
    console.log('456', 456); // MongLV log fix bug
    yield put(failure(err));
  }
}

// ---------------- watch
function* watchGetDataDetail() {
  const { id, nameAPI } = yield take(actionTypes.GET_ENTRY_DETAIL);
  yield fork(doLoadDataSaga, id, nameAPI);
}

export { watchGetDataDetail };
