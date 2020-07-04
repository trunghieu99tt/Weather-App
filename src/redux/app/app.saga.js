import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { queryFetchData, queryFetchLocation } from "./app.queries";
import * as actionTypes from "./app.types";

function* fetchDataHandler(params) {
    const { payload } = params;

    try {
        const response = yield call(queryFetchData, payload);

        if (response) {
            yield put({
                type: actionTypes.FETCH_DATA_SUCCESS,
                payload: response,
            });
        }
    } catch (error) {
        yield put({
            type: actionTypes.FETCH_DATA_FAIL,
            payload: { message: error },
        });
    }
}

export function* fetchData() {
    yield takeLatest(actionTypes.FETCH_DATA, fetchDataHandler);
}

function* fetchPlacesHandler(params) {
    const { payload } = params;

    try {
        const response = yield call(queryFetchLocation, payload);

        if (response) {
            yield put({
                type: actionTypes.FETCH_PLACES_SUCCESS,
                payload: response,
            });
        }
    } catch (error) {
        yield put({
            type: actionTypes.FETCH_PLACES_FAIL,
            payload: { message: error },
        });
    }
}

export function* fetchPlaces() {
    yield takeLatest(actionTypes.FETCH_PLACES, fetchPlacesHandler);
}
