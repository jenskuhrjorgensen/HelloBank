import * as React from "react"
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import {AccountsView} from "../Account/AccountsView"
import {AccountContainer} from "../Account/AccountContainer"

const Stack = createStackNavigator()

export function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Accounts" component={AccountContainer}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
