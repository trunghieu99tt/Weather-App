import { all, call } from "redux-saga/effects";
import { fetchData, fetchPlaces } from "./app/app.saga";

export default function* rootSaga() {
    yield all([call(fetchData), call(fetchPlaces)]);
}
