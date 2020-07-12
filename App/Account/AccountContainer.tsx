import * as React from "react"
import {useEffect} from "react"
import {AccountsView} from "./AccountsView"
import {useDispatch, useSelector} from "react-redux"
import {getAccounts} from "../Redux/Actions/AccountActions"
import {selectAccountList} from "../Redux/Selectors/AccountSelectors"
import {ROUTES} from "../Navigation/Routes"

interface Props {

}

export function AccountContainer({navigation}: Props) {
    const dispatch = useDispatch()
    useEffect(() => {
        getData()
    }, [])
    const accounts = useSelector(selectAccountList)

    const getData = () => {
        dispatch(getAccounts())
    }

    const onRefresh = () => {
        getData()
    }

    const onAccountPress = (accountId: string) => {
        navigation.push(ROUTES.accountDetail, {accountId: accountId})
    }

    const refreshing = accounts.length < 1 // Simplified!
    return (
        <AccountsView
            refreshing={refreshing}
            onRefresh={onRefresh}
            accounts={accounts}
            onAccountPress={onAccountPress}
        />
    )
}
