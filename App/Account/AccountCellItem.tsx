import React from "react"
import {StyleSheet, Text, TouchableOpacity} from "react-native"
import {Account} from "../Model/Account"

interface Props {
    account: Account,
    onAccountPress: (accountId: string) => void
}

export function AccountCellItem({account, onAccountPress}: Props){
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => onAccountPress(account.id)}>
            <Text>{account.name}</Text>
            <Text>{account.balance}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: "row",
        backgroundColor: "#fff",
        //alignItems: "center",
        justifyContent: "space-between",
    },
})
