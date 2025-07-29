import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import { thunk } from "redux-thunk";

// const sagaMiddleware = createSagaMiddleware();

// const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// sagaMiddleware.run(rootSaga);

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;