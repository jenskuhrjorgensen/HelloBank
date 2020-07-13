import {AccountById} from "../../Model/Account"

export enum AccountActions {
    ACCOUNTS_SET = "ACCOUNTS_SET",
    ACCOUNTS_SET_PENDING = "ACCOUNTS_SET_PENDING",
    ACCOUNTS_FILTER_SET = "ACCOUNTS_FILTER_SET",
}

export interface AccountsSetAction {
    type: AccountActions.ACCOUNTS_SET,
    accounts: AccountById,
}

export interface AccountsFilterSetAction {
    type: AccountActions.ACCOUNTS_FILTER_SET,
    filter: string | null,
}

export interface AccountsSetPendingSetAction {
    type: AccountActions.ACCOUNTS_SET_PENDING,
    pending: boolean,
}
