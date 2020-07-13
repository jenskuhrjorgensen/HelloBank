import React from "react"
import {StyleSheet, View} from "react-native"
import {Account, formatInterestRate} from "../Model/Account"
import {Body1} from "../Components/Typography/Body1"
import {formatOwnerName, Owner} from "../Model/Owner"
import {ContentView} from "../Components/Layout/Content/ContentView"

interface ItemProps {
    title: string,
    value: string,
}

function Item({title, value}: ItemProps) {
    return (
        <View style={styles.itemContainer}>
            <Body1>{title}</Body1>
            <Body1>{value}</Body1>
        </View>
    )
}

interface AccountDetailViewProps {
    account: Account,
    owner: Owner,
}

export function AccountDetailView({account, owner}: AccountDetailViewProps) {
    return (
        <ContentView>
            <Item title={"Account name:"} value={account.name}/>
            <Item title={"Description:"} value={account.description}/>
            <Item title={"Balance:"} value={"" + account.balance}/>
            <Item title={"Owner:"} value={formatOwnerName(owner)}/>
            <Item title={"IBAN:"} value={"" + account.iban}/>
            <Item title={"Account number:"} value={"" + account.accountNumber}/>
            <Item title={"Interest rate:"} value={formatInterestRate(account.interestRate)}/>
        </ContentView>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: 30,
    }
})
