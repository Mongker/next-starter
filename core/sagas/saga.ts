import { all } from 'redux-saga/effects';
import { watchLoadData } from 'core/sagas/examples/loadData/sagaLoadData';
import { watchRunClockSaga } from 'core/sagas/examples/clock/sagaClock';

function* rootSaga(): Generator {
  yield all([watchRunClockSaga(), watchLoadData()]);
}

export default rootSaga;
