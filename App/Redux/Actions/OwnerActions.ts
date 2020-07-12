import {OwnerById} from "../../Model/Owner"
import {OwnerActions, OwnersAddAction} from "./OwnerActionTypes"

export function addOwners(owners: OwnerById): OwnersAddAction {
    return {
        type: OwnerActions.OWNERS_ADD,
        owners: owners,
    }
}
