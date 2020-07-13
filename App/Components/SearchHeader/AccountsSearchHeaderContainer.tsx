import {SearchHeaderView} from "./SearchHeaderView"
import React from "react"
import {useDispatch, useSelector} from "react-redux"
import {setAccountsSearchFilter} from "../../Redux/Actions/AccountActions"
import {selectAccountsFilter} from "../../Redux/Selectors/AccountSelectors"
import {LayoutAnimation} from "react-native"

interface Props {
    title: string | undefined,
}

const inOutAnimation = LayoutAnimation.Presets.easeInEaseOut

export function AccountsSearchHeaderContainer({title}: Props) {
    const dispatch = useDispatch()
    const accountsFilter = useSelector(selectAccountsFilter)
    const onChangeText = (text: string) => {
        dispatch(setAccountsSearchFilter(text))
    }

    const onClosePress = () => {
        LayoutAnimation.configureNext(inOutAnimation)
        dispatch(setAccountsSearchFilter(null))
    }

    const onClearPress = () => {
        dispatch(setAccountsSearchFilter(""))
    }

    const onSearchPress = () => {
        LayoutAnimation.configureNext(inOutAnimation)
        dispatch(setAccountsSearchFilter(""))
    }

    return (
        <SearchHeaderView
            title={title || ""}
            filterText={accountsFilter}
            onChangeText={onChangeText}
            onClosePress={onClosePress}
            onClearPress={onClearPress}
            onSearchPress={onSearchPress}
        />
    )
}
