import {combineReducers} from "redux"
import {accountReducer} from "./AccountReducers"
import {ACCOUNT_STATE_NAME} from "../States/AccountState"
import {ownerReducer} from "./OwnerReducers"
import {OWNER_STATE_NAME} from "../States/OwnerState"

export const reducers = combineReducers({
    [ACCOUNT_STATE_NAME]: accountReducer,
    [OWNER_STATE_NAME]: ownerReducer,
})
