import * as React from "react"
import {StyleSheet, Text, View, ScrollView} from "react-native"

interface Props {
    accounts: Array<Account>,
}

export function AccountsView({accounts}: Props) {

    return (
        <View style={styles.container}>
            <ScrollView>
                {accounts.map((account: Account, index: number) => {
                    return (
                        <Text key={index}>{account.name}</Text>
                    )
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        //alignItems: "center",
        //justifyContent: "center",
    },
})
