import {getAccountState} from "../States/AccountState"
import {createSelector} from "reselect"
import {createCachedSelector} from "re-reselect"
import {NormalizerUtils} from "../../NormalizerUtils"
import {Account} from "../../Model/Account"
import {propertyOf} from "../../Utils"

const selectAccounts = (state) => getAccountState(state).accounts
export const selectAccountsFilter = (state) => getAccountState(state).accountsFilter
export const selectAccountsPending = (state) => getAccountState(state).pending

export const selectAccountById = createCachedSelector(
    [state => selectAccounts(state), (state, props) => props.accountId],
    (accounts, accountId): Account | undefined => {
        return accounts[accountId]
    }
)((_state_, props) => props.accountId)

export const selectAccountList = createSelector(
    selectAccounts,
    (accounts): Array<Account> => {
        return NormalizerUtils.normalizedObjectToArray(accounts)
    }
)

export const selectAccountListFiltered = createSelector(
    selectAccountList, selectAccountsFilter,
    (accounts, filter): Array<Account> => {
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
