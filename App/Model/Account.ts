import {Owner} from "./Owner"

export interface Account {
    id: string,
    name: string,
    alias: string,
    description: string,
    balance: number,
    accountNumber: number,
    registrationNumber: number,
    iban: number,
    owner: Owner,
    interestRate: number,
}
