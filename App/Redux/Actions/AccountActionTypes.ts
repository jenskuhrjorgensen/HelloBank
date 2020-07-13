import {AccountById} from "../../Model/Account"

export enum AccountActions {
    ACCOUNTS_SET = "ACCOUNTS_SET",
    ACCOUNTS_GET = "ACCOUNTS_GET",
    ACCOUNTS_SET_PENDING = "ACCOUNTS_SET_PENDING",
    ACCOUNTS_FILTER_SET = "ACCOUNTS_FILTER_SET",
    ACCOUNTS_FILTER_CLEAR = "ACCOUNTS_FILTER_CLEAR",
}

export interface AccountsSetAction {
    type: AccountActions.ACCOUNTS_SET,
    accounts: AccountById,
}

export interface AccountsFilterSetAction {
    type: AccountActions.ACCOUNTS_FILTER_SET,
    filter: string,
}

export interface AccountsFilterClearAction {
    type: AccountActions.ACCOUNTS_FILTER_CLEAR,
}

export interface AccountsSetPendingSetAction {
    type: AccountActions.ACCOUNTS_SET_PENDING,
    pending: boolean,
}
