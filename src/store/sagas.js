import { all, fork } from "redux-saga/effects";

import AuthSaga from "./auth/login/saga";
import LayoutSaga from "./layouts/saga";

export default function* rootSaga() {
  yield all([fork(AuthSaga),    fork(LayoutSaga),
  ]);
}
