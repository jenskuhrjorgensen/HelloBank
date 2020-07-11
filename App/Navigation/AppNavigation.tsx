import * as React from "react"
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import {AccountsView} from "../Account/AccountsView"

const Stack = createStackNavigator()

export function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Accounts" component={AccountsView}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
