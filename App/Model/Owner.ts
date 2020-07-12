export interface Owner {
    id: string,
    firstName: string,
    lastName: string,
}

export interface OwnerById {
    [key: string]: Owner,
}
