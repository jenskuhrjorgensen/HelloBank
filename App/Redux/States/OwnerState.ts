import {OwnerState} from "../Reducers/OwnerReducers"

export const OWNER_STATE_NAME = "owner"
export const getOwnerState = (state): OwnerState => state[OWNER_STATE_NAME]
