import React from "react"
import {StyleSheet, Text, TouchableOpacity} from "react-native"
import {Account} from "../Model/Account"

interface Props {
    item: Account,
    onAccountPress: (accountId: string) => void
}

export function AccountCellItem({item, onAccountPress}: Props){
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => onAccountPress(item.id)}>
            <Text>{item.name}</Text>
            <Text>{item.balance}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        backgroundColor: "#fff",
        //alignItems: "center",
        justifyContent: "space-between",
    },
})
