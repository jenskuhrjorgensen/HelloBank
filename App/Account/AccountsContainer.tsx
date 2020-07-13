import * as React from "react"
import {useEffect} from "react"
import {AccountsView} from "./AccountsView"
import {useDispatch, useSelector} from "react-redux"
import {getAccounts} from "../Redux/Actions/AccountActions"
import {selectAccountListFiltered, selectAccountsPending} from "../Redux/Selectors/AccountSelectors"
import {ROUTES} from "../Navigation/Routes"

interface Props {
    navigation: { push: Function },
}

export function AccountsContainer({navigation}: Props) {
    const dispatch = useDispatch()
    useEffect(() => {
        getData()
    }, [])
    const accounts = useSelector(selectAccountListFiltered)
    const pending = useSelector(selectAccountsPending)

    const getData = () => {
        dispatch(getAccounts())
    }

    const onRefresh = () => {
        getData()
    }

    const onAccountPress = (accountId: string) => {
        navigation.push(ROUTES.accountDetail, {accountId: accountId})
    }

    return (
        <AccountsView
            refreshing={pending}
            onRefresh={onRefresh}
            accounts={accounts}
            onAccountPress={onAccountPress}
        />
    )
}
