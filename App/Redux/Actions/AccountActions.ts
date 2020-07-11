import {AccountAction, AccountActions} from "./ActionTypes"
import {Account} from "../../Model/Account"

export function setAccounts(accounts: Array<Account>): AccountAction {
    return {
        type: AccountActions.ACCOUNTS_SET,
        accounts: accounts,
    }
}
