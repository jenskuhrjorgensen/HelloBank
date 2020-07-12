import {OwnerById} from "../../Model/Owner"

export const OWNER_STATE_NAME = "owner"

export interface OwnerState {
    owners: OwnerById,
}

export const initialOwnerState: OwnerState = {
    owners: {},
}
export const getOwnerState = (state): OwnerState => state[OWNER_STATE_NAME]
