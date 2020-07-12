import {OwnerActions} from "../Actions/OwnerActionTypes"
import {initialOwnerState, OwnerState} from "../States/OwnerState"

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
