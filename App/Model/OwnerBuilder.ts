import {Owner} from "./Owner"

export class OwnerBuilder {
    private readonly _owner: Owner

    constructor() {
        this._owner = {
            id: "",
            firstName: "",
            lastName: "",
        }
    }

    id(id: string): OwnerBuilder {
        this._owner.id = id
        return this
    }

    firstName(firstName: string): OwnerBuilder {
        this._owner.firstName = firstName
        return this
    }

    lastName(lastName: string): OwnerBuilder {
        this._owner.lastName = lastName
        return this
    }

    build(): Owner {
        return this._owner
    }
}
