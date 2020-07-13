import React from "react"
import {FlatList, FlatListProps, RefreshControl, StyleSheet, View} from "react-native"
import {H2} from "../Typography/H2"
import {getTheme} from "../../Theme/Theme"

function NoContent() {
    return (
        <View style={styles.noContentContainer}>
            <H2>No accounts matched your search</H2>
        </View>
    )
}

interface CustomListProps<Item> extends FlatListProps<Item> {
    refreshing: boolean,
    onRefresh: () => void,
}

export function CustomList<Item>({data, refreshing, onRefresh, ...rest}: CustomListProps<Item>) {
    const hasData = data != null && data.length > 0
    return (
        <FlatList<Item>
            data={data}
            contentContainerStyle={styles.contentContainerStyle}
            ItemSeparatorComponent={() => <View style={styles.separator}/>}
            ListFooterComponent={() => hasData ? <View style={styles.separator}/> : null}
            ListHeaderComponent={() => hasData ? <View style={styles.separator}/> : null}
            ListEmptyComponent={() => <NoContent/>}
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
        backgroundColor: "#0001",
    },
    contentContainerStyle: {
        flexGrow: 1,
        paddingHorizontal: getTheme().spacings.m,
    },
    noContentContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
})
