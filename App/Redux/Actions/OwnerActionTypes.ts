import {OwnerById} from "../../Model/Owner"

export enum OwnerActions {
    OWNERS_ADD = "OWNERS_ADD",
}

export interface OwnersAddAction {
    type: OwnerActions.OWNERS_ADD,
    owners: OwnerById,
}
