import * as React from "react"
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import {AccountsContainer} from "../Account/AccountsContainer"
import {AccountDetailContainer} from "../AccountDetail/AccountDetailContainer"
import {ROUTES} from "./Routes"
import {AccountsSearchHeaderContainer} from "../Components/SearchHeader/AccountsSearchHeaderContainer"


const Stack = createStackNavigator()

export function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={ROUTES.accounts}
                    component={AccountsContainer}
                    options={{headerTitle: ({children}) => <AccountsSearchHeaderContainer title={children}/>}}
                />
                <Stack.Screen name={ROUTES.accountDetail} component={AccountDetailContainer}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
