import React from "react"
import {AppNavigation} from "./App/Navigation/AppNavigation"
import {Provider} from "react-redux"
import {store} from "./App/Redux/Store"
import {Platform, UIManager} from "react-native"

if (Platform.OS === "android") {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true)
    }
}

export default () => {
    return (
        <Provider store={store}>
            <AppNavigation/>
        </Provider>
    )
}
