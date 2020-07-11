import * as React from "react"
import {AccountsView} from "./AccountsView"
import {useDispatch, useSelector} from "react-redux"
import {useEffect} from "react"
import {setAccounts} from "../Redux/Actions/AccountActions"

export function AccountContainer() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setAccounts([{name: "My First account"}]))
    })
    const accounts = useSelector((state) => state.account.accounts)

    return (
        <AccountsView
            accounts={accounts}
        />
    )
}
