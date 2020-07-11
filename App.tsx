import React from "react"
import {AppNavigation} from "./App/Navigation/AppNavigation"
import {Provider} from "react-redux"
import {store} from "./App/Redux/Store"

export default () => {
    return (
        <Provider store={store}>
            <AppNavigation/>
        </Provider>
    )
}
