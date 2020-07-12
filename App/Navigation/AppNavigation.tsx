import * as React from "react"
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import {AccountContainer} from "../Account/AccountContainer"
import {AccountDetailContainer} from "../AccountDetail/AccountDetailContainer"
import {ROUTES} from "./Routes"


const Stack = createStackNavigator()

export function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={ROUTES.accounts} component={AccountContainer}/>
                <Stack.Screen name={ROUTES.accountDetail} component={AccountDetailContainer}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
