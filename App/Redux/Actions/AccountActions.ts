import {AccountActions, AccountsSetAction} from "./ActionTypes"
import {AccountById} from "../../Model/Account"
import {fetchAccounts} from "../../Api/Api"

export function getAccounts() {
    return (dispatch) => {
        return fetchAccounts().then(
            accounts => dispatch(setAccounts(accounts)),
            error => console.error(error)
        )
    }
}

export function setAccounts(accounts: AccountById): AccountsSetAction {
    return {
        type: AccountActions.ACCOUNTS_SET,
        accounts: accounts,
    }
}
