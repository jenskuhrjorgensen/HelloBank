import React, {ReactChild} from "react"
import {StyleSheet, View, ViewProps} from "react-native"
import {getTheme} from "../../../Theme/Theme"

interface Props extends ViewProps {
    children: ReactChild | Array<ReactChild>,
}

export function ContentView({children, style}: Props) {
    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingVertical: getTheme().spacings.m,
        paddingHorizontal: getTheme().spacings.m,
    },
})
