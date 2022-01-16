import { call, put, takeLatest } from 'redux-saga/effects';
import { actionTypes, User } from 'core/interfaces';
import axios, { AxiosResponse } from 'axios';
import { failure, loadDataSuccess } from 'core/actions';

// ---------------- do
function* doLoadDataSaga() {
  try {
    const { status, data }: AxiosResponse<User[]> = yield call(
      axios.get,
      'https://jsonplaceholder.typicode.com/users',
    );

    if (status === 200) {
      yield put(loadDataSuccess(data));
    }
  } catch (err) {
    yield put(failure(err));
  }
}

// ---------------- watch
function* watchLoadData() {
  yield takeLatest(actionTypes.LOAD_DATA, doLoadDataSaga);
}

export { watchLoadData };
