import { call, put, takeEvery } from "redux-saga/effects";
import {
  GET_USER,
  setUser,
  DELETE_USER,
  deleteUserSuccess,
} from "../redux/action";
import axios from "axios";

function* fetchUsers() {
    try {
        const response = yield call(() => axios.get('https://jsonplaceholder.typicode.com/users')); 
        yield put(setUser(response.data));
    } catch (error) {
        console.log(error);
    }
}

function* deleteUserSaga(action) {
    try {
    const response = yield call(() =>
      axios.delete(`https://jsonplaceholder.typicode.com/users/${action.payload}`)
    );
    alert(`Deleted! Status: ${response.status}`);
    yield put(deleteUserSuccess(action.payload));
  } catch (error) {
    console.log(error);
  }
}

export default function* userSaga() {
  yield takeEvery(GET_USER, fetchUsers);
  yield takeEvery(DELETE_USER, deleteUserSaga);
}