import { takeLatest, put, select } from "redux-saga/effects";
import { JPH_CONST_STRING } from '../../service/const/actionConst';
import {getJphUsersSuccessAction, getJphUsersFailureAction, getJphPostsByUserIdSuccessAction, getJphPostsByUserIdFailureAction} from './jphAction'

const { GET_JPH_USERS_REQUEST, GET_JPH_POSTS_BY_USER_ID_REQUEST } = JPH_CONST_STRING;

function* getJphUsersRequestSaga (action) {
  let endpoint = '/users';
  // console.log(`${process.env.REACT_APP_JPH_API_ADDRESS}${endpoint}`)
  let response = yield fetch(`${process.env.REACT_APP_JPH_API_ADDRESS}${endpoint}`)
  let data = yield response.json();
  if (data) {
    yield put(getJphUsersSuccessAction(data))
  } else {
    yield put(getJphUsersFailureAction('Failed'))
  }
}

function* getJphPostsByUserIdRequestSaga (action) {
  console.log(action);
  let endpoint = `/posts?userId=${action.payload.id}`
  let response = yield fetch(`${process.env.REACT_APP_JPH_API_ADDRESS}${endpoint}`)
  let data = yield response.json();
  if (data) {
    yield put(getJphPostsByUserIdSuccessAction(data))
  } else {
    yield put(getJphPostsByUserIdFailureAction('Failed'))
  }
}


export function* jphSagaWatcher() {
  yield takeLatest (GET_JPH_USERS_REQUEST, getJphUsersRequestSaga);
  yield takeLatest (GET_JPH_POSTS_BY_USER_ID_REQUEST, getJphPostsByUserIdRequestSaga)
}
