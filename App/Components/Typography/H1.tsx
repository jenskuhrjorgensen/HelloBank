import {StyleSheet, Text, TextProps} from "react-native"
import React, {ReactChild} from "react"
import {getTheme} from "../../Theme/Theme"

interface Props extends TextProps {
    children: ReactChild | undefined,
}

export function H1({style, ...rest}: Props) {
    return (
        <Text
            style={[getTheme().typographies.h1, styles.container, style]}
            {...rest}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
