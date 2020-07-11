import * as React from "react"
import {StyleSheet, Text, View} from "react-native"

interface Props {
    accounts: Array<Account>,
}

export function AccountsView({accounts}: Props) {

    return (
        <View style={styles.container}>
            {accounts.map((account: Account) => {
                return (
                    <Text>{account.name}</Text>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
})
