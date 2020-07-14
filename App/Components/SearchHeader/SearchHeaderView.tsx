import {BackHandler, Dimensions, Platform, StyleSheet, TextInput, TouchableOpacity, View} from "react-native"
import React, {useCallback} from "react"
import {Ionicons} from "@expo/vector-icons"
import {H1} from "../Typography/H1"
import {useFocusEffect} from "@react-navigation/native"
import {getTheme} from "../../Theme/Theme"

const windowWidth = Dimensions.get("window").width

interface ButtonProps {
    onPress: () => void,
    iconName: string,
}

const ICON_SIZE = 32

function ButtonLeft({onPress, iconName}: ButtonProps) {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, styles.leftButton]}>
            <Ionicons name={iconName} size={ICON_SIZE}/>
        </TouchableOpacity>
    )
}

function ButtonRight({onPress, iconName}: ButtonProps) {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, styles.rightButton]}>
            <Ionicons name={iconName} size={ICON_SIZE}/>
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
            <H1>
                {title}
            </H1>
            <ButtonRight
                onPress={onSearchPress}
                iconName={"ios-search"}
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
    const onBackPress = () => {
        onClosePress()
        return true
    }

    useFocusEffect(
        useCallback(() => {
            BackHandler.addEventListener("hardwareBackPress", onBackPress)
            return () =>
                BackHandler.removeEventListener("hardwareBackPress", onBackPress)
        }, [])
    )

    return (
        <>
            <ButtonLeft
                onPress={onClosePress}
                iconName={"ios-arrow-back"}
            />
            <TextInput
                value={text}
                autoFocus={true}
                style={styles.inputText}
                placeholder={"Type to search"}
                onChangeText={onChangeText}
            />
            <ButtonRight
                onPress={onClearPress}
                iconName={"ios-close"}
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
        width: Platform.select({
            ios: windowWidth - getTheme().spacings.l,
            android: undefined
        }),
    },
    inputText: {
        flex: 1,
    },
    button: {
        width: 30,
        flexDirection: "row",
    },
    leftButton: {
        justifyContent: "flex-start",
    },
    rightButton: {
        justifyContent: "flex-end",
    }
})
