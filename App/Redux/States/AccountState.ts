import {AccountState} from "../Reducers/AccountReducers"

export const ACCOUNT_STATE_NAME = "account"
export const getAccountState = (state): AccountState => state[ACCOUNT_STATE_NAME]
