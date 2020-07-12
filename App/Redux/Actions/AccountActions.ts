import {AccountAction, AccountActions} from "./ActionTypes"
import {AccountById} from "../../Model/Account"

export function setAccounts(accounts: AccountById): AccountAction {
    return {
        type: AccountActions.ACCOUNTS_SET,
        accounts: accounts,
    }
}
