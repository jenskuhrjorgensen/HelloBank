export interface Owner {
    id: string,
    firstName: string,
    lastName: string,
}

export interface OwnerById {
    [key: string]: Owner,
}

export function formatOwnerName(owner: Owner): string {
    return owner.lastName + ", " + owner.firstName
}
