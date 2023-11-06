import { put, takeEvery } from "redux-saga/effects";

// Login Redux States
import { LOGIN_USER } from "./actionTypes";
import { loginSuccess } from "./actions";

function* loginUser({ payload: { user, history } }) {
  try {
    console.log("Initiating login user:- ", user);
    const response = {
      status: "success",
      data: {
        _id: "63e9befc9e3dbc5ba9a47087",
        first_name: "Shrey",
        last_name: "Kothari",
        email: "shrey.kothari@gmail.com",
        phone: +91 - 7874047821,
      },
    };
    sessionStorage.setItem("authUser", JSON.stringify(response));
    yield put(loginSuccess(response));
    history("/dashboard");
  } catch (error) {}
}

function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser);
}

export default authSaga;
