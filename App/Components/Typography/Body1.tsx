import {Text, TextProps} from "react-native"
import React, {ReactChild} from "react"
import {getTheme} from "../../Theme/Theme"

interface Props extends TextProps {
    children: ReactChild | undefined,
}

export function Body1({style, ...rest}: Props) {
    return (
        <Text
            style={[getTheme().typographies.body1, style,]}
            {...rest}
        />
    )
}
