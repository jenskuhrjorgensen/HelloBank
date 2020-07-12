import {AccountActions} from "../Actions/AccountActionTypes"
import {AccountById} from "../../Model/Account"

export interface AccountState {
    accounts: AccountById,
    accountsFilter: string | null,
}

const initialAccountState: AccountState = {
    accounts: {},
    accountsFilter: null,
}

export function accountReducer(state: AccountState = initialAccountState, action: any) {
    switch (action.type) {
        case AccountActions.ACCOUNTS_SET:
            return {
                ...state,
                accounts: action.accounts
            }
        case AccountActions.ACCOUNTS_FILTER_SET:
            return {
                ...state,
                accountsFilter: action.filter,
            }
        case AccountActions.ACCOUNTS_FILTER_CLEAR:
            return {
                ...state,
                accountsFilter: null,
            }
        default:
            return state
    }
}
