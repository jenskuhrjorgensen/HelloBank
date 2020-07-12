import * as React from "react"
import {RefreshControl, ScrollView, StyleSheet, Text, View} from "react-native"

interface Props {
    refreshing: boolean,
    onRefresh: () => void,
    accounts: Array<Account>,
}

export function AccountsView({refreshing, onRefresh, accounts}: Props) {

    return (
        <View style={styles.container}>
            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
                }
            >
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
