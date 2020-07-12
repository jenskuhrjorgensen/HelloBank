import {getAccountState} from "../States/AccountState"
import {createSelector} from "reselect"
import {createCachedSelector} from "re-reselect"
import {NormalizerUtils} from "../../NormalizerUtils"
import {Account, AccountById} from "../../Model/Account"
import {propertyOf} from "../../Utils"

const accounts = (state) => getAccountState(state).accounts
const accountsFilter = (state) => getAccountState(state).accountsFilter

export const selectAccountById = createCachedSelector(
    [state => accounts(state), (state, props) => props.accountId],
    (accounts: AccountById, accountId: string): Account | undefined => {
        return accounts[accountId]
    }
)((_state_, props) => props.accountId)

export const selectAccountList = createSelector(
    accounts,
    (accounts: AccountById): Array<Account> => {
        return NormalizerUtils.normalizedObjectToArray(accounts)
    }
)

export const selectAccountListFiltered = createSelector(
    selectAccountList, accountsFilter,
    (accounts: Array<Account>, filter: string | null): Array<Account> => {
        if (filter == null) return accounts
        return accounts.filter(filterByPropertiesFactory(filter, ACCOUNT_FILTER_PROPS), accounts)
    }
)

const ACCOUNT_FILTER_PROPS = [
    propertyOf<Account>("name"),
    propertyOf<Account>("description"),
]

export function filterByPropertiesFactory(filter: string, propertyNames: Array<string>) {
    return function (obj: Object): boolean {
        return propertyNames.reduce(filterByStringReduceFactory(obj, filter), false)
    }
}

export function filterByStringReduceFactory(obj: Object, filter: string) {
    const lowerCaseFilter = filter.toLowerCase()
    return function (acc: boolean, propertyName: string): boolean {
        return obj[propertyName]?.toLowerCase().includes(lowerCaseFilter) || acc
    }
}
