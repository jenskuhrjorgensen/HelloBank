import {BackHandler, StyleSheet, TextInput, TouchableOpacity, View} from "react-native"
import React, {useEffect} from "react"
import {Ionicons} from "@expo/vector-icons"
import {H1} from "../Typography/H1"

interface ButtonProps {
    onPress: () => void,
    iconName: string,
}

function ButtonLeft({onPress, iconName}: ButtonProps) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.leftIcon}>
            <Ionicons name={iconName} size={32}/>
        </TouchableOpacity>
    )
}

function ButtonRight({onPress, iconName}: ButtonProps) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.rightIcon}>
            <Ionicons name={iconName} size={32}/>
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
    text: string,
    onChangeText: OnChangeText,
    onClosePress: () => void,
    onClearPress: () => void,
}

function SearchView({text, onChangeText, onClosePress, onClearPress}: SearchViewProps) {
    const backAction = () => {
        onClosePress()
        return true
    }

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backAction)

        return () =>
            BackHandler.removeEventListener("hardwareBackPress", backAction)
    }, [])

    return (
        <>
            <ButtonLeft
                onPress={onClosePress}
                iconName={"md-arrow-back"}
            />
            <TextInput
                value={text}
                autoFocus={true}
                style={styles.headerContent}
                placeholder={"Type to search"}
                onChangeText={onChangeText}
            />
            <ButtonRight
                onPress={onClearPress}
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
    onClearPress: () => void,
}

export function SearchHeaderView({title, filterText, onChangeText, onClosePress, onClearPress, onSearchPress}: SearchHeaderViewProps) {
    const shouldShowSearch = filterText != null
    return (
        <View style={styles.container}>
            {shouldShowSearch ?
                <SearchView text={filterText || ""} onChangeText={onChangeText} onClosePress={onClosePress}
                            onClearPress={onClearPress}/> :
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
    icon: {
        width: 30,
    },
    leftIcon: {
        width: 30,
        justifyContent: "flex-start",
        flexDirection: "row",
    },
    rightIcon: {
        width: 30,
        justifyContent: "flex-end",
        flexDirection: "row",
    }
})
