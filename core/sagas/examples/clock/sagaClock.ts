// ---------------- watch
import { delay, put, take } from 'redux-saga/effects';
import { actionTypes } from 'core/interfaces';
import { tickClock } from 'core/actions';

function* watchRunClockSaga() {
  yield take(actionTypes.START_CLOCK);
  while (true) {
    yield put(tickClock(false));
    yield delay(1000);
  }
}

export { watchRunClockSaga };
