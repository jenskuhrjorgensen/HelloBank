import {AccountById} from "../../Model/Account"

export const ACCOUNT_STATE_NAME = "account"

export interface AccountState {
    accounts: AccountById,
    accountsFilter: string | null,
    pending: boolean,
}

export const initialAccountState: AccountState = {
    accounts: {},
    accountsFilter: null,
    pending: false,
}
export const getAccountState = (state): AccountState => state[ACCOUNT_STATE_NAME]
