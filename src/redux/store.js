import { compose } from "recompose";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

export const store = createStore(
    rootReducer,
    compose(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);

export default store;
