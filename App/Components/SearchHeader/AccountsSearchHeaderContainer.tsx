import {SearchHeaderView} from "./SearchHeaderView"
import React from "react"
import {useDispatch} from "react-redux"
import {setAccountsSearchFilter} from "../../Redux/Actions/AccountActions"

interface Props {
    title: string | undefined,
}

export function AccountsSearchHeaderContainer({title}: Props) {
    const dispatch = useDispatch()
    const onChangeText = (text: string) => {
        dispatch(setAccountsSearchFilter(text))
    }
    return (
        <SearchHeaderView
            title={title || ""}
            shouldShowSearch={true}
            onChangeText={onChangeText}
        />
    )
}
