import {AccountById} from "../Model/Account"

export function fetchAccounts(): Promise<AccountById> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                "0": {
                    id: "0",
                    name: "My First account1",
                    balance: 10.4
                },
                "1": {
                    id: "1",
                    name: "My First account2",
                    balance: 110.4
                },
                "2": {
                    id: "2",
                    name: "My First account3",
                    balance: 10.4,
                },
                "3": {
                    id: "3",
                    name: "My First account4",
                    balance: 10.4,
                },
            })
        }, 0)
    })
}
