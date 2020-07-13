import {Account} from "./Account"

export class AccountBuilder {
    private readonly _account: Account

    constructor() {
        this._account = {
            id: "",
            name: "",
            description: "",
            balance: 0,
            accountNumber: Math.round(Math.random()*10000000),
            iban: 4321,
            owner: "",
            interestRate: 0.4,
        }
    }

    id(id: string): AccountBuilder {
        this._account.id = id
        return this
    }

    name(name: string): AccountBuilder {
        this._account.name = name
        return this
    }

    description(description: string): AccountBuilder {
        this._account.description = description
        return this
    }

    balance(balance: number): AccountBuilder {
        this._account.balance = balance
        return this
    }

    accountNumber(accountNumber: number): AccountBuilder {
        this._account.accountNumber = accountNumber
        return this
    }

    iban(iban: number): AccountBuilder {
        this._account.iban = iban
        return this
    }

    owner(owner: string): AccountBuilder {
        this._account.owner = owner
        return this
    }

    interestRate(interestRate: number): AccountBuilder {
        this._account.interestRate = interestRate
        return this
    }

    build(): Account {
        return this._account
    }
}
