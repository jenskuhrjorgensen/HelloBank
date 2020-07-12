import {getAccountState} from "../States/AccountState"
import {createSelector} from "reselect"
import {NormalizerUtils} from "../../NormalizerUtils"

const accounts = (state) => getAccountState(state).accounts

export const selectAccountList = createSelector(
    accounts,
    (accounts) => {
        return NormalizerUtils.normalizedObjectToArray(accounts)
    }
)

