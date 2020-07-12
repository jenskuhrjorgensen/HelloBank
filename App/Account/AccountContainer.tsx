import * as React from "react"
import {useEffect} from "react"
import {AccountsView} from "./AccountsView"
import {useDispatch, useSelector} from "react-redux"
import {getAccounts} from "../Redux/Actions/AccountActions"
import {selectAccountList} from "../Redux/Selectors/AccountSelectors"

export function AccountContainer() {
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

    const refreshing = accounts.length < 1 // Simplified!
    return (
        <AccountsView
            refreshing={refreshing}
            onRefresh={onRefresh}
            accounts={accounts}
        />
    )
}
