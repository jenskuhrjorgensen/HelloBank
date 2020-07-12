import * as React from "react"
import {useSelector} from "react-redux"
import {Account} from "../Model/Account"
import {selectAccountById} from "../Redux/Selectors/AccountSelectors"
import {AccountDetailView} from "./AccountDetailView"

interface Props {
    route: { params: { accountId: string } },
}

export function AccountDetailContainer({route}: Props) {
    const account: Account | undefined = useSelector(state => selectAccountById(state, {accountId: route.params.accountId}))
    if (account == null) return null
    return (
        <AccountDetailView
            account={account}
        />
    )
}
