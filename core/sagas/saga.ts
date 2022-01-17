import { all } from 'redux-saga/effects';
import { watchLoadData } from 'core/sagas/examples/loadData/sagaLoadData';
import { watchRunClockSaga } from 'core/sagas/examples/clock/sagaClock';
import { watchGetDataDetail } from '@core/sagas/thread/sagaThread';

function* rootSaga(): Generator {
  yield all([watchRunClockSaga(), watchLoadData(), watchGetDataDetail()]);
}

export default rootSaga;
