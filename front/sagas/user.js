import {
  all, fork, takeLatest, call, put, delay,
} from 'redux-saga/effects';
import axios from 'axios';
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_FAILURE,
  LOG_OUT_SUCCESS,
  LOAD_USER_REQUEST,
  LOAD_USER_FAILURE,
  LOAD_USER_SUCCESS,
} from '../reducers/user';

function loginAPI(logIndata) {
  return axios.post('/user/login', logIndata, {
    withCredentials: true,
  });
}

function signupAPI(signUpData) {
  return axios.post('/user/', signUpData);
}
// function loginAPI() {}
function logoutAPI() {
  return axios.post('/user/logout',{},{
    withCredentials: true,
  });
}
function loaduserAPI() {
  return axios.get('/user/', {
    withCredentials: true,
  });
}

function* signUp(action) {
  try {
    yield call(signupAPI, action.data);
    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: SIGN_UP_FAILURE,
      error: e,
    });
  }
}

function* logIn(action) {
  try {
    const result = yield call(loginAPI, action.data);
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOG_IN_FAILURE,
    });
  }
}

function* logOut() {
  try {
    const result = yield call(logoutAPI);
    yield put({
      type: LOG_OUT_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOG_OUT_FAILURE,
    });
  }
}

function* loadUser() {
  try {
    const result = yield call(loaduserAPI);
    yield put({
      type: LOAD_USER_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_USER_FAILURE,
    });
  }
}

function* watchSignup() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogout() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}


function* watchLoadUser() {
  yield takeLatest(LOAD_USER_REQUEST, loadUser);
}

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchSignup), fork(watchLogout), fork(watchLoadUser)]);
}
