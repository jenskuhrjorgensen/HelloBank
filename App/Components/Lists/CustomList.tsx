import React from "react"
import {FlatList, FlatListProps, RefreshControl, StyleSheet, View} from "react-native"

interface Props<Item> extends FlatListProps<Item> {
    refreshing: boolean,
    onRefresh: () => void,
}

export function CustomList<Item>({data, refreshing, onRefresh, ...rest}: Props<Item>) {
    const hasData = data != null && data.length > 0
    return (
        <FlatList<Item>
            data={data}
            ItemSeparatorComponent={() => <View style={styles.separator}/>}
            ListFooterComponent={() => hasData ? <View style={styles.separator}/> : null}
            ListHeaderComponent={() => hasData ? <View style={styles.separator}/> : null}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
            }
            {...rest}
        />
    )
}

const styles = StyleSheet.create({
    separator: {
        height: 1,
        backgroundColor: "#000",
    },
})
