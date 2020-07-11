import * as React from "react"
import {StyleSheet, Text, View} from "react-native"

export function AccountsView() {

    return (
        <View style={styles.container}>
            <Text>Account</Text>
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
