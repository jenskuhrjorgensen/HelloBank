import {applyMiddleware, createStore} from "redux"
import thunk from "redux-thunk"
import {reducers} from "./Reducers"
import logger from "redux-logger"

const middleWare = applyMiddleware(
    thunk,
    logger, // NB: Apply logger middleware in the end to make sure it logs the actual dispatched actions
)

export const store = createStore(reducers, middleWare)
