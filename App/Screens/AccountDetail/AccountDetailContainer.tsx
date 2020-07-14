import * as React from "react"
import {useSelector} from "react-redux"
import {Account} from "../../Model/Account"
import {selectAccountById} from "../../Redux/Selectors/AccountSelectors"
import {AccountDetailView} from "./AccountDetailView"
import {selectOwnerById} from "../../Redux/Selectors/OwnerSelector"
import {Owner} from "../../Model/Owner"

interface Props {
    route: { params: { accountId: string } },
}

export function AccountDetailContainer({route}: Props) {
    const account: Account | undefined = useSelector(state => selectAccountById(state, {accountId: route.params.accountId}))
    const owner: Owner | undefined = useSelector(state => selectOwnerById(state, {ownerId: account?.owner}))
    if (account == null || owner == null) return null
    return (
        <AccountDetailView
            account={account}
            owner={owner}
        />
    )
}
