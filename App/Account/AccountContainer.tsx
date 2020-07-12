import * as React from "react"
import {useEffect} from "react"
import {AccountsView} from "./AccountsView"
import {useDispatch, useSelector} from "react-redux"
import {setAccounts} from "../Redux/Actions/AccountActions"
import {selectAccountList} from "../Redux/Selectors/AccountSelectors"

export function AccountContainer() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setAccounts({
            "0": {
                name: "My First account1"
            },
            "1": {
                name: "My First account2"
            },
            "2": {
                name: "My First account3"
            },
            "3": {
                name: "My First account4"
            },
        }))
    }, [])
    const accounts = useSelector(selectAccountList)

    return (
        <AccountsView
            accounts={accounts}
        />
    )
}
