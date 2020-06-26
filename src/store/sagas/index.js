import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { fetchPostsSaga } from './post';

export function* watchPosts() {
    yield takeEvery(actionTypes.FETCH_REDDITS_START, fetchPostsSaga);
}