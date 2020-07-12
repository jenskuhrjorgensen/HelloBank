import {StyleSheet, TextInput, TouchableOpacity, View} from "react-native"
import React from "react"
import {Ionicons} from "@expo/vector-icons"
import {H1} from "../Typography/H1"

interface ButtonRightProps {
    onPress: () => void,
    iconName: string,
}

function ButtonRight({onPress, iconName}: ButtonRightProps) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.rightIcon}>
            <Ionicons name={iconName} size={32} color="green"/>
        </TouchableOpacity>
    )
}

interface HeaderViewProps {
    title: string,
    onSearchPress: () => void,
}

function HeaderView({title, onSearchPress}: HeaderViewProps) {
    return (
        <>
            <H1 style={styles.headerContent}>
                {title}
            </H1>
            <ButtonRight
                onPress={onSearchPress}
                iconName={"md-search"}
            />
        </>
    )
}

type OnChangeText = (text: string) => void

interface SearchViewProps {
    onChangeText: OnChangeText,
    onClosePress: () => void,
}

function SearchView({onChangeText, onClosePress}: SearchViewProps) {
    return (
        <>
            <TextInput
                style={styles.headerContent}
                placeholder={"Type to search"}
                onChangeText={onChangeText}
            />
            <ButtonRight
                onPress={onClosePress}
                iconName={"md-close"}
            />
        </>
    )
}

interface SearchHeaderViewProps {
    title: string,
    filterText: string | null,
    onChangeText: OnChangeText,
    onSearchPress: () => void,
    onClosePress: () => void,
}

export function SearchHeaderView({title, filterText, onChangeText, onClosePress, onSearchPress}: SearchHeaderViewProps) {
    const shouldShowSearch = filterText != null
    return (
        <View style={styles.container}>
            {shouldShowSearch ? <SearchView onChangeText={onChangeText} onClosePress={onClosePress}/> :
                <HeaderView title={title} onSearchPress={onSearchPress}/>}

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
    headerContent: {
        flex: 5,
    },
    rightIcon: {
        flex: 1,
        justifyContent: "flex-end",
        flexDirection: "row",
    }
})
