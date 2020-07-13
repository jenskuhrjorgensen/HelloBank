import {AccountActions} from "../Actions/AccountActionTypes"
import {AccountState, initialAccountState} from "../States/AccountState"

export function accountReducer(state: AccountState = initialAccountState, action: any) {
    switch (action.type) {
        case AccountActions.ACCOUNTS_SET:
            return {
                ...state,
                accounts: action.accounts
            }
            case AccountActions.ACCOUNTS_SET_PENDING:
            return {
                ...state,
                pending: action.pending
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
