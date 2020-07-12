import {Owner} from "./Owner"

export interface AccountDto {
    id: string,
    name: string,
    description: string,
    balance: number,
    accountNumber: number,
    iban: number,
    owner: Owner,
    interestRate: number,
}

export interface Account {
    id: string,
    name: string,
    description: string,
    balance: number,
    accountNumber: number,
    iban: number,
    owner: string,
    interestRate: number,
}

export interface AccountById {
    [key: string]: Account,
}
