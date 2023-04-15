import { put, call, all, take, delay, fork, takeEvery, takeLatest } from 'redux-saga/effects';


// FORK ONLOADING
const userSagas = [];

// EXPORT Root Saga
export default function* rootSaga() {
  yield all([...userSagas]);
}