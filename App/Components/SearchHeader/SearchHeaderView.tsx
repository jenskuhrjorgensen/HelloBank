import {StyleSheet, TextInput, TouchableOpacity, View} from "react-native"
import React from "react"
import {Ionicons} from "@expo/vector-icons"
import {H1} from "../Typography/H1"

interface HeaderViewProps {
    title: string,
}

function HeaderView({title}: HeaderViewProps) {
    return (
        <>
            <H1>
                {title}
            </H1>
            <TouchableOpacity>
                <Ionicons name="md-search" size={32} color="green"/>
            </TouchableOpacity>
        </>
    )
}

type OnChangeText = (text: string) => void

interface SearchViewProps {
    onChangeText: OnChangeText,
}

function SearchView({onChangeText}: SearchViewProps) {
    return (
        <>
            <TextInput
                placeholder={"Type to search"}
                onChangeText={onChangeText}
            />
        </>
    )
}

interface SearchHeaderViewProps {
    title: string,
    shouldShowSearch: boolean,
    onChangeText: OnChangeText,
}

export function SearchHeaderView({title, shouldShowSearch, onChangeText}: SearchHeaderViewProps) {
    return (
        <View style={styles.container}>
            {shouldShowSearch ? <SearchView onChangeText={onChangeText}/> : <HeaderView title={title}/>}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
})
