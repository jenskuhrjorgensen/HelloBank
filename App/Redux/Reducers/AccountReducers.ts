import {AccountActions, AccountsSetAction} from "../Actions/ActionTypes"

interface AccountState {
    accounts: Array<Account>,
}

const initialAccountState: AccountState = {
    accounts: [],
}

export function accountReducer(state: AccountState = initialAccountState, action: AccountsSetAction) {
    switch (action.type) {
        case AccountActions.ACCOUNTS_SET:
            return {
                ...state,
                accounts: action.accounts
            }
        default:
            return state
    }
}
