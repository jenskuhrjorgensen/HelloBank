import {AccountById} from "../../Model/Account"

export enum AccountActions {
    ACCOUNTS_SET = "ACCOUNTS_SET",
    ACCOUNTS_GET = "ACCOUNTS_GET",
}

export interface AccountsSetAction {
    type: AccountActions.ACCOUNTS_SET,
    accounts: AccountById,
}
