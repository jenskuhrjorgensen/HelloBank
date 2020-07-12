import {Text, TextProps} from "react-native"
import React, {ReactChild, ReactChildren} from "react"
import {getTheme} from "../../Theme/Theme"

interface Props extends TextProps {
    children: ReactChild | undefined,
}

export function H1({style, ...rest}: Props) {
    return (
        <Text
            style={[getTheme().typographies.h1, style,]}
            {...rest}
        />
    )
}
