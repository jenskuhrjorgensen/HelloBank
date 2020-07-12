import * as React from "react"
import {FlatList, RefreshControl, StyleSheet, View} from "react-native"
import {AccountCellItem} from "./AccountCellItem"

interface Props {
    refreshing: boolean,
    onRefresh: () => void,
    accounts: Array<Account>,
    onAccountPress: (accountId: string) => void,
}

export function AccountsView({onAccountPress, refreshing, onRefresh, accounts}: Props) {

    return (
        <View style={styles.container}>
            <FlatList<any>
                data={accounts}
                keyExtractor={account => account.id}
                renderItem={({item}) => <AccountCellItem account={item} />}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
                }
            >
            </FlatList>
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
