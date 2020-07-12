import {AccountActions, AccountsSetAction} from "../Actions/ActionTypes"
import {AccountById} from "../../Model/Account"

interface AccountState {
    accounts: AccountById,
}

const initialAccountState: AccountState = {
    accounts: {},
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
