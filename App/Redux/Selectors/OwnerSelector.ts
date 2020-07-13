import {getOwnerState} from "../States/OwnerState"
import {createCachedSelector} from "re-reselect"
import {Owner} from "../../Model/Owner"

const selectOwners = state => getOwnerState(state).owners

export const selectOwnerById = createCachedSelector(
    [state => selectOwners(state), (state, props) => props.ownerId],
    (owners, ownerId): Owner | undefined => {
        return owners[ownerId]
    }
)((_state_, props) => props.ownerId)
