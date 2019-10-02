import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { createPromise } from "redux-promise-middleware";
import thunk from "redux-thunk";

import reducers from "./Redux/Reducers";

const middleware = applyMiddleware(createPromise(), thunk, createLogger());

export default createStore(reducers, middleware);
