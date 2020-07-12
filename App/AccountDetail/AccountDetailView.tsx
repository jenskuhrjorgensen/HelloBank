import React from "react"
import {Text} from "react-native"
import {Account} from "../Model/Account"

interface Props {
    account: Account,
}

export function AccountDetailView({account}: Props) {
    return (
        <Text>
            {account.name}
        </Text>
    )
}
