import React from "react"
import {StyleSheet, Text, TouchableOpacity} from "react-native"
import {Account} from "../../Model/Account"
import {Body1} from "../../Components/Typography/Body1"

interface Props {
    account: Account,
    onAccountPress: (accountId: string) => void
}

export function AccountCellItem({account, onAccountPress}: Props) {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => onAccountPress(account.id)}>
            <Body1>{account.name}</Body1>
            <Body1>{account.balance}</Body1>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        flexDirection: "row",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "space-between",
    },
})
