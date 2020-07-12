import * as React from "react"
import {StyleSheet, View} from "react-native"
import {AccountCellItem} from "./AccountCellItem"
import {CustomList} from "../Components/Lists/CustomList"
import {Account} from "../Model/Account"

interface Props {
    refreshing: boolean,
    onRefresh: () => void,
    accounts: Array<Account>,
    onAccountPress: (accountId: string) => void,
}

export function AccountsView({onAccountPress, refreshing, onRefresh, accounts}: Props) {

    return (
        <View style={styles.container}>
            <CustomList<Account>
                data={accounts}
                keyExtractor={account => account.id}
                renderItem={({item}) => <AccountCellItem account={item} onAccountPress={onAccountPress}/>}
                refreshing={refreshing}
                onRefresh={onRefresh}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
})
