import {
    AccountActions,
    AccountsFilterClearAction,
    AccountsFilterSetAction,
    AccountsSetAction,
    AccountsSetPendingSetAction
} from "./AccountActionTypes"
import {AccountById} from "../../Model/Account"
import {fetchAccounts} from "../../Api/Api"
import {addOwners} from "./OwnerActions"

export function getAccounts() {
    return (dispatch) => {
        dispatch(setAccountsPending(true))
        return fetchAccounts().then(
            accountsNormalized => {
                dispatch(setAccounts(accountsNormalized.entities.accounts))
                dispatch(addOwners(accountsNormalized.entities.owners))
            },
            error => console.error(error)
        ).finally(() => dispatch(setAccountsPending(false)))
    }
}

// This should be replaced with something like redux-promise-middleware
export function setAccountsPending(pending: boolean): AccountsSetPendingSetAction {
    return {
        type: AccountActions.ACCOUNTS_SET_PENDING,
        pending: pending,
    }
}

export function setAccounts(accounts: AccountById): AccountsSetAction {
    return {
        type: AccountActions.ACCOUNTS_SET,
        accounts: accounts,
    }
}

export function setAccountsSearchFilter(filter: string): AccountsFilterSetAction {
    return {
        type: AccountActions.ACCOUNTS_FILTER_SET,
        filter: filter,
    }
}

export function clearSearchFilter(): AccountsFilterClearAction {
    return {
        type: AccountActions.ACCOUNTS_FILTER_CLEAR,
    }
}
