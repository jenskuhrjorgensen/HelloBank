import {SearchHeaderView} from "./SearchHeaderView"
import React from "react"
import {useDispatch, useSelector} from "react-redux"
import {clearSearchFilter, setAccountsSearchFilter} from "../../Redux/Actions/AccountActions"
import {selectAccountsFilter} from "../../Redux/Selectors/AccountSelectors"

interface Props {
    title: string | undefined,
}

export function AccountsSearchHeaderContainer({title}: Props) {
    const dispatch = useDispatch()
    const accountsFilter = useSelector(selectAccountsFilter)
    const onChangeText = (text: string) => {
        dispatch(setAccountsSearchFilter(text))
    }

    const onClosePress = () => {
        dispatch(clearSearchFilter())
    }

    const onSearchPress = () => {
        dispatch(setAccountsSearchFilter(""))
    }

    return (
        <SearchHeaderView
            title={title || ""}
            filterText={accountsFilter}
            onChangeText={onChangeText}
            onClosePress={onClosePress}
            onSearchPress={onSearchPress}
        />
    )
}
