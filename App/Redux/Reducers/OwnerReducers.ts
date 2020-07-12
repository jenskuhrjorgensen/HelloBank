import {OwnerById} from "../../Model/Owner"
import {OwnerActions} from "../Actions/OwnerActionTypes"

export interface OwnerState {
    owners: OwnerById,
}

const initialOwnerState: OwnerState = {
    owners: {},
}

export function ownerReducer(state: OwnerState = initialOwnerState, action: any) {
    switch (action.type) {
        case OwnerActions.OWNERS_ADD:
            return {
                ...state,
                owners: {
                    ...state.owners,
                    ...action.owners,
                }
            }
        default:
            return state
    }
}
