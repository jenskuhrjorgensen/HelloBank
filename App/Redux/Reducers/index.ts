import {combineReducers} from "redux"
import {accountReducer} from "./AccountReducers"
import {ACCOUNT_STATE_NAME} from "../States/AccountState"

export const reducers = combineReducers({
    [ACCOUNT_STATE_NAME]: accountReducer,
})
