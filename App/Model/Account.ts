import {Owner} from "./Owner"

interface AccountDto {
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

export interface Account {
    id: string,
    name: string,
    alias: string,
    description: string,
    balance: number,
    accountNumber: number,
    registrationNumber: number,
    iban: number,
    owner: string,
    interestRate: number,
}

export interface AccountById {
    [key: string]: Account,
}
