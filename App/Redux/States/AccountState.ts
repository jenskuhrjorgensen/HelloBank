import {AccountById} from "../../Model/Account"

export const ACCOUNT_STATE_NAME = "account"

export interface AccountState {
    accounts: AccountById,
    accountsFilter: string | null,
}

export const initialAccountState: AccountState = {
    accounts: {},
    accountsFilter: null,
}
export const getAccountState = (state): AccountState => state[ACCOUNT_STATE_NAME]
